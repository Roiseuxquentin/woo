import React , { Component } from 'react'

import Horloge from '../components/horloge.js'
import Compteur from '../components/compteur.js'

import '../style/app.css'

class From extends Component {

  state = {
    message:undefined,
    ip:undefined,
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
    if (this.props.ip) {
      this.setState({ip : this.props.ip})
    }
  }

  componentDidMount() {
    if (this.state.message && (localStorage.visitCount > 1) ) {
      localStorage.recap = `${localStorage.recap} ; ${this.state.message} : le ${Date().toLocaleString()} .`
    }
  }

  render() {
    return (
      <div className="from" >
        <h1 className="ip" >{this.state.ip}</h1>
        <div className="paillette" >
          {this.state.message}
        </div>
        <div className='count' >
          <Horloge className="count" />
</div>
        <div className='count' >
          <Compteur />
        </div>
      </div>
    )
  }
}

export default From