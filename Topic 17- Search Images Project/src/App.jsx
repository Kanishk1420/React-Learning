import React from 'react'
import { fetchphotos } from './api/mediaapi'

const App = () => {
  return (
    <div className='h-screen w-full bg-gray-950 text-white'>
      <button onClick={()=>{fetchphotos('office')}}>Get Photos</button>
    </div>
  )
}

export default App
