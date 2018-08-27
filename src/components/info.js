import React from 'react'
import Modal from 'react-responsive-modal'

import '../style/icons.css'

import infoIcon from "../img/info.png"

class Speed extends React.Component {
  state = {
    open: false,
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
      <div  >
        <img src={infoIcon} onClick={this.onOpenModal} />
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
            <h1> En cour de dev...</h1>
            <hr />
            <p>Aucune donnée n'est conservée sur ce site, uniquement sur votre navigateur internet. </p>
        </Modal>
      </div>
    )
  }
}

export default Speed