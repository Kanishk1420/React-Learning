import React from 'react'
import { useState } from 'react'
const Usestate = () => {
    const [num, setnum] = useState(0);
    const [name, setname] = useState('Kanishk');
    function increment(){
        setnum(num + 1)
    }
    function changeName(){
        setname('Kanishka')
    }
  return (
    <div>
        <h1>Value of {num}</h1>
        <button className='bg-red-300' onClick={increment}>Click me</button>
        <h2>Name is {name}</h2>
        <button className='bg-red-300' onClick={changeName}>Click me</button>
    </div>
  )
}

export default Usestate