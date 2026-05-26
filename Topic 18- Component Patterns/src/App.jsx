import React from 'react'
import Card from './components/Card'
import Tab from './components/Card'
import Button from './components/Button'
import Header from './components/Header'
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
      {/* The Button component can be reused with different text and colors with reusable component*/}
      <div style={{ display: "flex", gap: "8px" }}>
      <Button text = "Save" color="green"/>
      <Button text = "Delete" color="red"/>
      <Button text = "Update" color="blue"/>
      </div>
      <Header>
        <Header.Tab>
          <Button text="Home" color= "Darkblue"/>
          <Button text="About" color= "Lightblue"/>
          <Button text= "Contanct" color= "Blue"/>
        </Header.Tab>
        <Header.Body>
          <p>This is the body of the header component.</p>
        </Header.Body>
      </Header>
    </div>
  )
}

export default App