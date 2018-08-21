import React , { Component } from 'react'

import Horloge from '../components/horloge.js'
import Compteur from '../components/compteur.js'

import '../style/app.css'


class From extends Component {

  state = {
    message:undefined,
  }

  componentWillMount() {
    if (localStorage.visitCount) {
      const nbVisit = (Number(localStorage.visitCount) + 1 )
      this.setState({message : `${nbVisit}eme visite`})
      localStorage.visitCount = nbVisit
    }
    else {
      localStorage.visitCount = 1
      this.setState({message : `Premiere visite !!`})
      localStorage.recap = `Premiere visite : le ${Date().toLocaleString()} .`
    }
  }

  componentDidMount() {
    if (this.state.message && (localStorage.visitCount > 1) ) {
      localStorage.recap = `${localStorage.recap} ; ${this.state.message} : le ${Date().toLocaleString()} .`
    }
  }

  render() {
    return (
      <div>
      <p>{this.state.message}</p>
        <Horloge />
        <Compteur />
      </div>
    )
  }
}

export default From