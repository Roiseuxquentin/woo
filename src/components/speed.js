import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-responsive-modal'

import SpeedUp from './speedUp.js'
import '../style/icons.css'
import '../style/speed.css'

import speedIcon from "../img/speed.png"

class Speed extends React.Component {
  state = {
    open: false,
    speed:[0],
    average:0,
  }

  onOpenModal = () => {
    this.setState({ open: true })
    this.setState({average : Math.round(this.state.speed.reduce((add,speed) => add + speed) / this.state.speed.length)})
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    return (
      <div>
      <img src={speedIcon} onClick={this.onOpenModal} />
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
          <SpeedUp />
        </Modal>
      </div>
    )
  }
}

export default Speed