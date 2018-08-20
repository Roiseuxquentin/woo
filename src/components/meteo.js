import React , { Component } from 'react'


class Meteo extends Component {
  state = {
    metedoTemp : undefined,
    meteoDesc : undefined,
    meteoIcon : undefined,
    load : false,
  }

  // componentDidUpdate() {
  //   if ( (!this.state.load) && this.props.town) {
  //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.town}&units=metric&APPID=339ca6935cce3023e268810a00f76910`)
  //     .then(req => req.json())
  //     .then(res => {
  //       this.setState({meteoIcon:res.weather[0].icon, meteoTemp:res.main.temp, meteoDesc:res.weather[0].description, load:true})
  //       console.log(res)
  //     })
  //   }
  // }

  render() {
    console.log(this.props,"youuuuu")
    return (
      <div>
        <img className='' src={`http://openweathermap.org/img/w/${this.state.meteoIcon}.png`} />
        <p className='' > {this.state.meteoTemp} °C ,  {this.state.meteoDesc}</p>
      </div>
    )
  }
}

export default Meteo