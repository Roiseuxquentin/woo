import React , { Component } from 'react'


class Meteo extends Component {
  state = {
    metedoTemp : undefined,
    meteoDesc : undefined,
    meteoIcon : undefined,
    load : false,
  }

  componentDidUpdate() {
    if (this.props.info.info && !this.state.load) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.info.info.latitude}&lon=${this.props.info.info.longitude}&units=metric&APPID=e20b116c6da0d1aa91b14288e72ff616`)
        .then(req => req.json())
        .then(res => {
          this.setState({ meteoTemp:res.main.temp,
                          meteoDesc:res.weather[0].description,
                          meteoIcon:res.weather[0].icon,
                          load:true })
        })
    }
  }

  render() {
    return (
      <div>
        <img className='' src={`http://openweathermap.org/img/w/${this.state.meteoIcon}.png`} />
        <p className='' > {this.state.meteoTemp} °C ,  {this.state.meteoDesc}</p>
      </div>
    )
  }
}

export default Meteo