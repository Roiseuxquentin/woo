import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-responsive-modal'

import '../style/icons.css'
import userIcon from "../img/user.png"
import userIconModal from "../img/userInfo.png"

class User extends React.Component {
  state = {
    open: false,
    ip:undefined,
    os:undefined,
    lang:undefined,
    nbVisit:undefined,
    totalTime:undefined,
  }

  componentDidMount() {
    this.setState({os : navigator.platform})
  }
  componentWillMount() {

    if (this.props.info) {
    this.setState({ip : this.props.info.ip})
    this.setState({lang : this.props.info.location.languages[0].native})
    }
    if (localStorage.visitCount) {
      this.setState({nbVisit : localStorage.visitCount})
      this.setState({totalTime : localStorage.totalTime})
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
      <img src={userIcon} onClick={this.onOpenModal} />
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
          animationDuration={1000}  >
          <img src={userIconModal} />
          <hr />
          <p className="ip , underLoc" >{this.state.ip}</p>
          <p>langage : {this.state.lang}</p>
          <p>nombre de visites : {this.state.nbVisit}</p>
          <p>Temps Total sur le site : {Math.floor(this.state.totalTime % 3600 / 60)} min(s)
                                                   {this.state.totalTime % 3600 % 60} sec</p>
          <p>System : {this.state.os}</p>
        </Modal>
      </div>
    )
  }
}

export default User