import React from 'react'
import Loader from 'react-loader-spinner'

import Town from '../components/town.js'
import Map from '../components/map.js'
import User from '../components/user.js'
import Speed from '../components/speed.js'
import Info from '../components/info.js'

import '../style/icons.css'

const Icons = ({info, ip}) => {
  if (info) {
    return (
      <div className="iconsLine" >
      <Town info={info} />
      <Map info={info} />
      <User ip={ip} info={info} />
      <Speed />
      <Info  />
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