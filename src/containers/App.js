import React, { Component } from 'react'
import '../style/App.css'
import Horloge from '../components/horloge.js'
import Compteur from '../components/compteur.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Compteur />
          <Horloge />
        </header>
      </div>
    )
  }
}

export default App