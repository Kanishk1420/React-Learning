import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div>
      <Card>
        {/* Everything inside these tags is passed as the "children" prop */}
        <h1>Profile</h1>
        <p>Hi, I am Kanishk</p>
      </Card>
      <Card>
        <h1>Product</h1>
        <button>Buy Now</button>
      </Card>
    </div>
  )
}

export default App