import React from 'react'

import User from '../components/user.js'
import Town from '../components/town.js'
import Speed from '../components/speed.js'
import All from '../components/all.js'
import Map from '../components/map.js'

import '../style/icons.css'

const Icons = ({info}) => {
  return (
    <div className="iconsLine" >
      <Town />
      <Map info={info}/>
      <User />
      <Speed />
      <All />
    </div>
  )
}

export default Icons