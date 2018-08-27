import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-responsive-modal'

import Local from '../components/local.js'
import '../style/icons.css'

import allIcon from "../img/params.png"
import eyeIcon from "../img/eyes.png"

class All extends React.Component {
  state = {
    open: false,
    ip : undefined,
    os : undefined,
    info : undefined,
    nbCo : undefined,
    debit : undefined,
    totalTime : undefined,
  }

  componentDidMount() {
    this.setState({os : navigator.platform})
    this.setState({nbCo : localStorage.visitCount})
    this.setState({totalTime : localStorage.totalTime})
    this.setState({debit : localStorage.debit})
  }
  componentWillMount() {
    if (this.props.info) {
      this.setState({ip : this.props.info.ip})
      this.setState({info : this.props.info})
    }
    (navigator.platform) ? this.setState({os : navigator.platform}) : console.log("pas d'os")
  }

  onOpenModal = () => {
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    return (
      <div className='recap' >
        <img src={allIcon} onClick={this.onOpenModal} />
        <Modal open={open} onClose={this.onCloseModal}
           center
           classNames={{
            transitionEnter: 'transition-enter',
            transitionEnterActive: 'transition-enter-active',
            transitionExit: 'transition-exit-active',
            transitionExitActive: 'transition-exit-active',
            overlay: 'custom-overlay',
            modal: 'custom-modal'
          }}
          animationDuration={1000}
           >
              <img src={eyeIcon} />
              <hr/>
          <div className="textAlign">

            <ul>
              <li>IP : {this.state.ip} , {this.state.info.country_name}</li>
              <li>Localisation : {this.state.info.city} ({this.state.info.zip}),{this.state.info.region_name}</li>
              <li>latitude : {this.state.info.latitude}</li>
              <li>longitude : {this.state.info.longitude}</li>
              <li>Ip local : <Local /> </li>
              <li>System d'exploitation : {this.state.os} </li>
              <li>nb de connection(s) : {this.state.nbCo} </li>
              <li>temps total de connection : {Math.floor(this.state.totalTime % 3600 / 60)} min
                                                          {this.state.totalTime % 3600 % 60} sec </li>
              <li>temps moyen par connection : {Math.floor(Number(this.state.totalTime) / Number(this.state.nbCo))} sec </li>
              <li>débit moyen de connection : {this.state.debit} </li>
            </ul>
          </div>
        </Modal>
      </div>
    )
  }
}

export default All