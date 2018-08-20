import React from 'react'
import Local from '../components/local.js'

const Who = ({ip}) => {
  return (
    <div>
      <h5>Informations</h5>
      <p>Ip public : {ip} </p>
      <Local />
      <p>System : {navigator.platform} </p>
    </div>
  )
}
export default Who