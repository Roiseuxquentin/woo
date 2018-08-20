import React from 'react'

class Horloge extends React.Component {

  state = {
    time : new Date().toLocaleString() ,
  }

  // componentDidMount() {
  //   setInterval( () => {
  //     this.setState({
  //       // time : new Date().toLocaleString() ,
  //     })
  //   },1000)
  // }

  render() {
    console.log(this.state)
    return (
      <div className="Moment">
        <p>le {this.state.time}, </p>
      </div>
    )
}
}

export default Horloge