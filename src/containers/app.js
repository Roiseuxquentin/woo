import React, { Component } from 'react'

import Meteo from '../components/meteo.js'
import From from '../containers/from.js'
import Who from '../containers/who.js'
import Icons from './icons.js'

import '../style/app.css'

class App extends Component {

  state = {
    ip: "88.186.169.153",
    // ip : undefined,
    info : undefined,
  }

  componentDidMount() {
    // fetch('https://api.ipify.org?format=json')
    //   .then(req => req.json())
    //   .then(res => {
    //     this.setState({ip:res.ip})
    //   })
    //   .then( res => {
        fetch(`http://api.ipstack.com/${this.state.ip}?access_key=b908dcc9061f0b9644498ae6329f7c3a`)
        .then(req => req.json())
        .then(res => {
          this.setState({info:res})
        })
      // })
    }

  render() {
    return (
      <div className="app">
          <Icons  info={this.state.info} className="header" />
        <div className="from" >
          <From info={this.state.info} />
        </div>
        <div className="meteo" >
          <Meteo info={this.state.info} />
        </div>
        <div className="who" >
          <Who ip={this.state.ip} />
        </div>
      </div>
    )
  }
}

export default App