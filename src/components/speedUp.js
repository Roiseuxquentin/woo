import React from 'react'
import ReactDOM from 'react-dom'

import '../style/speed.css'

import speedIcon from "../img/speed.png"

const image = 'http://www.supportduweb.com/ftp/ybouane/scripts_astuces/javascript/vitesse_connexion/image.png'
const size = 158298

let time1 = undefined
let time2 = undefined
let i = 5



class SpeedUp extends React.Component {

  state = {
    speed:[],
    average:0,
  }

  componentDidMount() {
  }

  startDownload = () =>{
      time1 = new Date()
      time1 = time1.getTime()
      const img = new Image()
      img.src = image+'?'+time1
      img.onload=this.endDownload
  }

  endDownload = () =>{
    let time2 = new Date()
    time2 = time2.getTime()
    const ms = time2-time1
    const vitesse = Math.round(size/ms*100)/100
    this.setState({
      speed: [...this.state.speed, vitesse]
    })
  }

  start = () => {
      const arrTime = [50,200,500,611,750,1000]
      arrTime.forEach(time => setTimeout(() => this.startDownload() , time))
      setTimeout(() => this.setState({
        average : Math.round(this.state.speed.reduce((add,speed) => add + speed) / this.state.speed.length)
      }) , 1100)
  }

  render() {

    return (
      <div>
        <h2>{this.state.average} Ko/sec</h2>
        <img src={speedIcon} onClick={this.start} />
      </div>
    )
  }
}

export default SpeedUp