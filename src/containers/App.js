import React, { Component } from 'react'

import Meteo from '../components/meteo.js'
import From from '../containers/from.js'
import Who from '../containers/who.js'

import '../style/App.css'

import youpi from "../img/home.png"




class App extends Component {

  state = {
    ip : undefined,
    town : undefined,
  }

  componentDidMount() {
    fetch('https://api.ipify.org?format=json')
      .then(req => req.json())
      .then(res => {
        this.setState({ip:res.ip})
      })
      .then( res => {
        fetch(`http://api.ipstack.com/${this.state.ip}?access_key=b908dcc9061f0b9644498ae6329f7c3a`)
        .then(req => req.json())
        .then(res => {
          this.setState({town:res.city})
        })
      })
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={youpi} />
        </header>
        <div className="from" >
          <From town={this.state.town} />
        </div>
        <div className="meteo" >
          <Meteo town={this.state.town} />
        </div>
        <div className="who" >
          <Who ip={this.state.ip} />
        </div>
      </div>
    )
  }
}

export default App