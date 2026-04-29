import React from 'react'

const localstorage = () => {
  localStorage.setItem("name","John Doe");
  const a = localStorage.getItem("name");
  const b = localStorage.getItem("23");
  localStorage.removeItem("23");
  localStorage.clear();

  const user = {
    username: "Kanishk",
    age:22,
    city: 'Ranchi',
    State: 'Jharkhand'
  }
  localStorage.setItem("user", user) // This will not work as expected because localStorage only stores strings here it will store [object Object]
  localStorage.setItem("user", JSON.stringify(user)) // This will work as expected because we are converting the object to a string using JSON.stringify
  localStorage.getItem("user") // This will return the stringified version of the user object
  const c = JSON.parse(localStorage.getItem("user")) // This will convert the stringified version of the user object back to an object using JSON.parse
  console.log(c);
  return (
    <div>
    {a}{b}
    <h2>{c.username}</h2>
    <h2>{c.age}</h2>
    </div>
  )
}

export default localstorage