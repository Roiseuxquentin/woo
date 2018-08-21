import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';

import '../style/map.css'

import mapIcon from "../img/map.png"

class Map extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
      <img src={mapIcon} onClick={this.onOpenModal} />
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Simple centered modal</h2>
        </Modal>
      </div>
    );
  }
}

export default Map