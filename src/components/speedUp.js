import React from 'react'
import ReactDOM from 'react-dom'

import '../style/speed.css'

import startIcon from "../img/speedStart.png"
import connectH from "../img/connectH.png"
import connectM from "../img/connectM.png"
import connectL from "../img/connectL.png"

let signalIcon = connectL
const image = 'http://www.supportduweb.com/ftp/ybouane/scripts_astuces/javascript/vitesse_connexion/image.png'
const size = 158298

let time1 = undefined
let time2 = undefined
let i = 5



class SpeedUp extends React.Component {

  state = {
    signalIcon : connectL,
    speed:[],
    average:0,
  }

  componentDidMount() {
    this.start()
  }

  componentWillMount() {
    console.log("jesuis monte sur un poney de deit moyen a foutre dans un localstourAge")
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

      setTimeout(() => {
        if (this.state.speed.length > 0) {
        this.setState({
          average : Math.round(this.state.speed.reduce((add,speed) => add + speed) / this.state.speed.length)
        })
          if (this.state.average < 4000) {
            this.setState({signalIcon : connectM})
          }
          else {
            this.setState({signalIcon : connectH})
          }
        }
        else {
          this.setState({signalIcon : connectL})
        }
      } , 1100)
    }

  render() {

    return (
          <div>
            <img className="icons" src={this.state.signalIcon} />
            <h5 className="underLoc" >Vitesse Moyenne de Téléchargement</h5>
            <hr />
            <div className="displaySpeed" >
              <h2>{this.state.average} Ko/sec</h2>
            </div>
            <img className="startIcon" src={startIcon} onClick={this.start} />
          </div>
    )
  }
}

export default SpeedUp