import React from 'react'
import Title from './Components/Uiux/Title'
import Description from './Components/Uiux/Description'
import Topstock from './Components/Pagecomponents/Topstock'
import Trackgroth from './Components/Pagecomponents/Trackgroth'
import Investsmartly from './Components/Pagecomponents/Investsmartly'

function page() {
  return (
    <div className='bg-black'>
      <Topstock />
      <Trackgroth/>
      <Investsmartly />
    </div>
  )
}

export default page
