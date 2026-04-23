import React from 'react'
const Scroll = () => {
    const pagescrolling = (element) => {
    if(element.deltaY > 0){
      console.log('scrolling down')
    } else {
      console.log('scrolling up')
    }
  }
  return (
      <div onWheel={pagescrolling}>
      <h1 className='max-h-min'>Scrolled</h1>
    </div>
  )
}

export default Scroll
