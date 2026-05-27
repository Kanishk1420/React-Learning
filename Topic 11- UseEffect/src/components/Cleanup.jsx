import React from 'react'
import { useState, useEffect } from 'react'
const Cleanup = () => {
const [count, setCount] = useState(0);
useEffect(() => {
    const intervalId  = setInterval(() => {
    setCount((prevCount) => prevCount + 1);
    }, 1000); // here what happens is kei useffect sirf ek baar hei chalega jab value mount hoga fir nahi chalega jab tak vo re-render nahi kartha but the problem is that we are creating a new interval every time the component re-renders, which can lead to multiple intervals running simultaneously and causing unexpected behavior. To fix this issue, we can use a cleanup function to clear the interval when the component unmounts or before setting up a new interval. Here's how you can do it:
    return () => {
    clearInterval(intervalId); // Clear the interval when the component unmounts or before setting up a new one
    };
}, [count]);
  return (
    <div>
    <h1>Timer:{count}</h1>
    </div>
  )
}

export default Cleanup