import React from 'react'
import Loader from 'react-loader-spinner'

import All from '../components/all.js'
import '../style/app.css'

const Footer = ({info}) => {

  if (info) {
    return (
      <div className='footer' >
        <div className='recap' >
          <All info={info} />
        </div>
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
    </div>)
  }
}

export default Footer