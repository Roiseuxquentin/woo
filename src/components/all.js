import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';

import '../style/all.css'

import youpi from "../img/home.png"

class All extends React.Component {
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
      <img src={youpi} onClick={this.onOpenModal} />
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Simple centered modal</h2>
        </Modal>
      </div>
    );
  }
}

export default All