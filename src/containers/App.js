import React, { Component } from 'react'

import Meteo from '../components/meteo.js'
import From from '../containers/from.js'
import Who from '../containers/who.js'

import '../style/App.css'

import youpi from "../img/home.png"

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={youpi} />
        </header>
        <div className="from" >
          <From />
        </div>
        <div className="meteo" >
          <Meteo />
        </div>
        <div className="who" >
          <Who />
        </div>
      </div>
    )
  }
}

export default App