import React from 'react'
import Local from '../components/local.js'

import '../style/app.css'

const Who = ({ip}) => {
  return (
    <div className='who' >
      <h5>Informations</h5>
      <p>Ip public : {ip} </p>
      <p>Ip locale : <Local /> </p>
      <p>System : {navigator.platform} </p>
    </div>
  )
}
export default Who