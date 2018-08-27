import React from 'react'

import '../style/app.css'

class Compteur extends React.Component {

  state = {
    session : 0
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        session : (this.state.session + 1)
      })
      if ((this.state.session % 10) === 0 ) {
        localStorage.totalTime = Number(localStorage.totalTime) + 10
      }
    },1000)
  }

  render() {
    return (
      <div className="moment">
        <p>pendant <div className="timer">
        {this.state.session}
        </div> secondes</p>
      </div>
    )
  }
}

export default Compteur