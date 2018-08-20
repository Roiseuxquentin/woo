import React from 'react'


// stocK.setItem('likedOEUVRE', `${data},${liked}`)


class Compteur extends React.Component {

  state = {
    session : 0
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        session : (this.state.session + 1)
      })
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