import React from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import Header from "./components/Header";
import Kart from "./components/Kart";
import P from "./components/PricingCard";
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
      {/* The Button component can be reused with different text and colors with reusable component*/}
      <div style={{ display: "flex", gap: "10px", margin: "20px 0" }}>
        <Button text="Save" color="green" />
        <Button text="Delete" color="red" />
        <Button text="Update" color="blue" />
      </div>
      {/* Using the Header component with its compound components Tab and Body Compund Component*/}
      <Header>
        <Header.Tab>
          <Button text="Home" color="Darkblue" />
          <Button text="About" color="Lightblue" />
          <Button text="Contanct" color="Blue" />
        </Header.Tab>
        <Header.Body>
          <p>This is the body of the header component.</p>
        </Header.Body>
      </Header>
      {/* Using the Kart component with its compound components KartTab and KartBody with children props */}
      <div>
        <Kart>
          <Kart.Item>
          <Kart.header><P text="Basic" color="lightgreen" /></Kart.header>
          <Kart.body><P text="₹0/month" color="lightgreen" /></Kart.body>
          <Kart.footer><Button text="Buy Now" color="lightgreen" /></Kart.footer>
          </Kart.Item>
          <Kart.Item>
          <Kart.header><P text="Pro" color="red" /></Kart.header>
          <Kart.body><P text="₹999/month" color="red" /></Kart.body>
          <Kart.footer><Button text="Buy Now" color="red"/></Kart.footer>
          </Kart.Item>
          <Kart.Item>
          <Kart.header><P text="Team" color="blue" /></Kart.header>
          <Kart.body> <P text="₹1999/month" color="blue" /></Kart.body>
         <Kart.footer><Button text="Buy Now" color="blue" /></Kart.footer>
          </Kart.Item>
        </Kart>
      </div>
    </div>
  );
};

export default App;
