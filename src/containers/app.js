import React, { Component } from 'react'

import Meteo from '../components/meteo.js'
import From from './from.js'
import Who from './who.js'
import Footer from '../components/footer.js'
import Icons from './icons.js'

import '../style/app.css'

class App extends Component {

  state = {
    // ip: "88.186.169.153",
    ip : undefined,
    info : undefined,
  }

 componentWillMount() {
  if (!localStorage.visitCount) {
    localStorage.visitCount = 0
    localStorage.debit = 0
    localStorage.totalTime = 0
    localStorage.recap = "Log ; "
  }
 }

  componentDidMount() {
    fetch('https://api.ipify.org?format=json')
      .then(req => req.json())
      .then(res => {
        this.setState({ip:res.ip})
      })
      .then( res => {
        fetch(`http://api.ipstack.com/${this.state.ip}?access_key=/* ICIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII */`)
        .then(req => req.json())
        .then(res => {
          this.setState({info:res})
        })
      })
    }

  render() {
    return (
      <div className="app">
        <Icons ip={this.state.ip} info={this.state.info} />
        <From  ip={this.state.ip}  />
        <Meteo info={this.state.info} />
        <Who ip={this.state.ip} />
        <Footer info={this.state.info} />
      </div>
    )
  }
}

export default App
