import React from 'react'
import Loader from 'react-loader-spinner'

import User from '../components/user.js'
import Town from '../components/town.js'
import Speed from '../components/speed.js'
import All from '../components/all.js'
import Map from '../components/map.js'

import '../style/icons.css'

const Icons = ({info}) => {
  if (info) {
    return (
      <div className="iconsLine" >
      <Town info={info } />
      <Map info={info} />
      <User />
      <Speed />
      <All />
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
    </div>
  )
}
}

export default Icons