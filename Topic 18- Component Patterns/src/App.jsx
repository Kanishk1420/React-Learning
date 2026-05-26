import React from 'react'
import Card from './components/Card'
import Tab from './components/Card'
import Button from './components/Button'
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
      <Tab>
        <h1>Tab Component</h1>
        <p>This is a tab component that can be reused.</p>
      </Tab>
      <div style={{ display: "flex", gap: "8px" }}>
      <Button text = "Save" color="green"/>
      <Button text = "Delete" color="red"/>
      <Button text = "Update" color="blue"/>
      </div>
    </div>
  )
}

export default App