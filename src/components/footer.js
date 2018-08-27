import React from 'react'

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
    return (<div>loader</div>)
  }
}

export default Footer