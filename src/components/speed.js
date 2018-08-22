import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-responsive-modal'


import SpeedUp from './speedUp.js'
import '../style/speed.css'

import speedIcon from "../img/speed.png"



class Speed extends React.Component {
  state = {
    open: false,
    speed:[0],
    average:0,
  }

  componentDidMount() {

    // const startDownload = () =>{
    //     time1 = new Date()
    //     time1 = time1.getTime()
    //     const img = new Image()
    //     img.src = image+'?'+time1
    //     img.onload=endDownload
    // }
    // const endDownload = () =>{
    //   let time2 = new Date()
    //   time2 = time2.getTime()
    //   const ms = time2-time1
    //   const vitesse = Math.round(size/ms*100)/100
    //   this.setState({
    //     speed: [...this.state.speed, vitesse]
    //   })
    // }

    // while (i > 0) {
    //   startDownload()
    //   i--
    // }
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
        <Modal open={open} onClose={this.onCloseModal} center>
          <h5>Vitesse Moyenne de Téléchargement</h5>
          {/* <h2>{this.state.average} Ko/sec</h2> */}
          <SpeedUp />
        </Modal>
      </div>
    )
  }
}

export default Speed