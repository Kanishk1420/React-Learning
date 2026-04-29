import React from 'react'
import { useState } from 'react'
const Apicall = () => {

const [data, setdata] = useState('');
async function getdata(){
 const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
 console.log(response);
 const data = await response.json() // why need waiat again because the response will again go to promoise and we need to wait for that promise to resolve to get the actual data so we need to use await again to wait for that promise to resolve and get the actual data
 console.log(data);
 setdata(data.title);
}
  return (
    <div>
    <button onClick={getdata}>Get Data</button> {/* This will not work as expected because fetch is an asynchronous function and it returns a promise. We need to use async/await or .then() to handle the promise returned by fetch */}
    <p>{data}</p>
    </div>
  )
}

export default Apicall