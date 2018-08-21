import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-responsive-modal'
import { Scene } from 'react-arcgis'
import Loader from 'react-loader-spinner'

import '../style/map.css'
import mapIcon from "../img/map.png"

class Map extends React.Component {

  state = {
    open: false,
    lat:undefined,
    lon:undefined
  }

  componentWillReceiveProps() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( (position) => {
          this.setState({lat:position.coords.latitude})
          this.setState({lon:position.coords.longitude})
          })
    }
    else {
      this.setState({lat:this.props.info.latitude})
      this.setState({lon:this.props.info.longitude})
    }
  }


  onOpenModal = () => {
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    if (this.state.lon){
      return (
        <div>
        <img src={mapIcon} onClick={this.onOpenModal} />
          <Modal open={open} onClose={this.onCloseModal} center>
            <Scene  className='displayMap'
                    style={{ width: '40vw', height: '40vh' }}
                    mapProperties={{ basemap: 'streets' }}
                    viewProperties={{
                        center: [(this.state.lon), (this.state.lat)],
                        scale:12500
                    }}
            />
          </Modal>
        </div>
      )
    }
    else {
      return (
        <div>
          <Loader
            type="Oval"
            color="white"
            height={40}
            width={40}
          />
        </div>
      )
    }
  }
}

export default Map