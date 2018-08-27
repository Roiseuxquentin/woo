import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-responsive-modal'

import '../style/icons.css'

import townIcon from "../img/city.png"
import houseIcon from "../img/home.png"

class Town extends React.Component {
  state = {
    open: false,
    display:false,
    nom : undefined,
    codePostal : undefined,
    region:undefined,
    pop : undefined,
    pays : undefined,
  }

  componentWillMount() {
    if (this.props.info) {
      fetch(`https://geo.api.gouv.fr/communes?nom=${this.props.info.city}`)
      .then(req => req.json())
      .then(res => {
        this.setState({nom : this.props.info.city})
        this.setState({codePostal : this.props.info.zip})
        this.setState({region : this.props.info.region_name})
        this.setState({pays : this.props.info.country_name})
        this.setState({pop : res[0].population})
      })
    }
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
      <div>
        <img src={townIcon} onClick={this.onOpenModal} />
          <Modal open={open} onClose={this.onCloseModal} center
            classNames={{
                transitionEnter: 'transition-enter',
                transitionEnterActive: 'transition-enter-active',
                transitionExit: 'transition-exit-active',
                transitionExitActive: 'transition-exit-active',
                overlay: 'custom-overlay',
                modal: 'custom-modal'
                }}
              animationDuration={1000}>

            <img src={houseIcon} />
            <hr />
            <p>ville : {this.state.nom} </p>
            <p>nombre d'habitants : {this.state.pop} </p>
            <p>code Postal : {this.state.codePostal} </p>
            <p>région : {this.state.region} </p>
            <p>pays : {this.state.pays} </p>
        </Modal>
      </div>
    )
  }
}

export default Town