import React from 'react'
import Local from '../components/local.js'

import '../style/app.css'

const Who = ({ip}) => {

  const logSplited = localStorage.recap.split(';')
  const logMapped = logSplited.map( elt => {
    return (<li>{elt}</li>)
  })

  return (
    <div className='who' >
      <p>System : {navigator.platform}
      <br />
      <div className='moduleLine'>
        ip local : .<Local />
      </div>
      cookies : {(navigator.cookieEnabled) ? 'activés' : 'désactivé'}
      <br />
      {/* fournisseur : */}
       </p>
       <hr />
       <ul className="log" >{logMapped}</ul>
    </div>
  )
}
export default Who

