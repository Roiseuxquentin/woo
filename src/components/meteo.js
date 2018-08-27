import React , { Component } from 'react'
import Loader from 'react-loader-spinner'

import '../style/app.css'

class Meteo extends Component {
  state = {
    town : undefined,
    metedoTemp : "19.75",
    meteoDesc : "overcast clouds",
    meteoIcon : undefined,
    load : false,
  }

  componentDidUpdate() {
    if (this.props.info && !this.state.town){
      this.setState({town:this.props.info.city})
    }
    else if (this.props.info && !this.state.load) {
      // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.info.latitude}&lon=${this.props.info.longitude}&units=metric&APPID=e20b116c6da0d1aa91b14288e72ff616`)
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.info.latitude}&lon=${this.props.info.longitude}&units=metric&APPID=339ca6935cce3023e268810a00f76910`)
        .then(req => req.json())
        .then(res => {
          this.setState({ meteoTemp:res.main.temp,
                          meteoDesc:res.weather[0].description,
                          meteoIcon:res.weather[0].icon,
                          load:true,
                        })
                        console.log(this.props.info,'this.props.info meteo')
        })
    }
  }

  render() {
    if (this.state.load){
      return (
        <div className='meteo' >
          <img className='meteoImg' src={`http://openweathermap.org/img/w/${this.state.meteoIcon}.png`} />
          <p className="city" > {this.state.town} </p>
          <p className='meteoTxt' > {this.state.meteoTemp} °C ,  {this.state.meteoDesc}</p>
        </div>
    )
  }
  else {
    return (
      <div className='meteo' >
        <Loader
        type="ThreeDots"
        color="#00BFFF"
        height="50"
        width="50"
      />
      <p> {this.state.town} </p>
      </div>
    )
  }
  }
}

export default Meteo