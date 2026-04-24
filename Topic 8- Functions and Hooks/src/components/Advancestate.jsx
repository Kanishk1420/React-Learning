import React from "react";
import { useState } from "react";
const Advancestate = () => {
  const [num, setnum] = useState(10);
  const [nameage, setnameage] = useState({ name: "Kanishk", age: 21 });
  const [array, setarray] = useState([10, 20, 30, 40, 50]);
  const [a, seta] = useState(0);
  const btnclicked = () => {
    setnum(20);
    console.log(num); // here the value of num will be 10 because the state update is asynchronous, it will not update the value of num immediately after calling setnum, it will update it in the next render cycle, so when we log num immediately after calling setnum, it will still have the old value of 10;
    const newname = { ...nameage };
    newname.name = "Mohit";
    setnameage(newname);
    if (nameage.name === "Kanishk") {
      // If it's Kanishk, change to Mohit
      setnameage({ ...nameage, name: "Mohit" });
    } else {
      // If it's NOT Kanishk (meaning it's Mohit), change back to Kanishk
      setnameage({ ...nameage, name: "Kanishk" });
    }
    const newarray = [...array];
    newarray.pop(); // pop operation will happen from last of the index of the array
    setarray(newarray);
  };
  const btnclicked2 = () => {
    seta(a + 1);
    seta(a + 1);
    seta(a + 1);
     // here the value of a will be 0 because the state update is asynchronous, it will not update the value of a immediately after calling seta, it will update it in the next render cycle, so when we log a immediately after calling seta, it will still have the old value of 0;
     seta(prev => prev + 1);
      seta(prev => prev + 1);
        seta(prev => prev + 1); // here the value of a will be 3 because we are using the functional form of the state update, which takes the previous state as an argument and returns the new state, so each call to seta will have the updated value of a from the previous call, resulting in a total increment of 3.
  }
  return (
    <div>
      <h1>{num}</h1>
      <h2>{nameage.name}</h2>
      <h1>{array}</h1>
      <button onClick={btnclicked}>click me</button>
      <h2> This will multi-increment by {a}</h2>
      <button onClick={btnclicked2}>Click Me</button>
    </div>
  );
};

export default Advancestate;
