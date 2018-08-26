import React , { Component } from 'react'
import Loader from 'react-loader-spinner'


class Meteo extends Component {
  state = {
    metedoTemp : undefined,
    meteoDesc : undefined,
    meteoIcon : undefined,
    load : false,
  }

  componentDidUpdate() {
    // if (this.props.info && !this.state.load) {
    //   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.info.latitude}&lon=${this.props.info.longitude}&units=metric&APPID=e20b116c6da0d1aa91b14288e72ff616`)
    //     .then(req => req.json())
    //     .then(res => {
    //       this.setState({ meteoTemp:res.main.temp,
    //                       meteoDesc:res.weather[0].description,
    //                       meteoIcon:res.weather[0].icon,
    //                       load:true })
    //     })
    // }
  }

  render() {
  //   if (this.state.load){
  //     return (
  //       <div>
  //       <img className='' src={`http://openweathermap.org/img/w/${this.state.meteoIcon}.png`} />
  //       <p className='' > {this.state.meteoTemp} °C ,  {this.state.meteoDesc}</p>
  //     </div>
  //   )
  // }
  // else {
    return (
      <Loader 
      type="ThreeDots"
      color="#00BFFF"
      height="50"	
      width="50"
   />
    )
  // }
  }
}

export default Meteo