import React from 'react'
import Local from '../components/local.js'

import '../style/app.css'

const Who = ({ip}) => {
  return (
    <div className='who' >
      <p>System : {navigator.platform}
      <br />
      <div className='moduleLine'>
        ip local : .<Local />
      </div>
      cookies : {(navigator.cookieEnabled) ? 'activés' : 'désactivé'}
      <br />
      fournisseur : </p>
    </div>
  )
}
export default Who

