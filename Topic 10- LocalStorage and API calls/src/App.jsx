import React from 'react'
import Localstorage from './components/Localstorage'
import Apicall from './components/Apicall'
import Axios from './components/Axios'
const App = () => {
  return (
    <div>
      <Localstorage />
      <Apicall />
      <Axios />
    </div>
  )
}

export default App