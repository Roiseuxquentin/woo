import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-responsive-modal'
import { Scene } from 'react-arcgis'
import Loader from 'react-loader-spinner'

import '../style/icons.css'

import mapIcon from "../img/map.png"
import streetView from "../img/street-view.png"

class Map extends React.Component {

  state = {
    open: false,
    lat:undefined,
    lon:undefined
  }

  componentWillMount() {
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
          <Modal open={open} onClose={this.onCloseModal}
            center
            classNames={{
              transitionEnter: 'transition-enter',
              transitionEnterActive: 'transition-enter-active',
              transitionExit: 'transition-exit-active',
              transitionExitActive: 'transition-exit-active',
              overlay: 'custom-overlay',
              modal: 'custom-modal'
            }}
            animationDuration={1000}>
            <div className="textColor">
            latitude<img src={streetView} />longitude
            </div>
            <p className="underLoc" >({this.state.lat.toPrecision(5)}),({this.state.lon.toPrecision(5)})</p>
            <Scene  className='displayMap'
                    style={{ width: '39vw', height: '40vh' }}
                    mapProperties={{ basemap: 'streets' }}
                    viewProperties={{
                        center: [(this.state.lon), (this.state.lat)],
                        scale:11000
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