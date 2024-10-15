import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './MyComponents/Header'
import {Todo} from './MyComponents/Todo'
import Footer from './MyComponents/Footer'
import { Todos } from "./MyComponents/Todos";
function App() {
  return (
    <>
      <Header title="My" number = {8}/>
      <Todo/>
      <br />
      <Footer/>
      <br/>
      <Todos  title={[ 23,56,89]}/>
    </>
  )
}

export default App
