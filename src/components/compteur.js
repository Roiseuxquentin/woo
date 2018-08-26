import React from 'react'

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
      <div className="Moment">
        <p>pendant {this.state.session} secondes</p>
      </div>
    )
  }
}

export default Compteur