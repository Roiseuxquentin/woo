import React from 'react'
import Horloge from '../components/horloge.js'
import Compteur from '../components/compteur.js'

import '../style/App.css'

const From = ({props}) => {
  return (
    <div>
      <Horloge />
      <Compteur />
    </div>
  )
}
export default From