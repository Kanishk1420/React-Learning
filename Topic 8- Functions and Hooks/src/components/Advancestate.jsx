import React from "react";
import { useState } from "react";
const Advancestate = () => {
  const [num, setnum] = useState(10);
  const [nameage, setnameage] = useState({ name: "Kanishk", age: 21 });
  const [array, setarray] = useState([10, 20, 30, 40, 50]);
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
  return (
    <div>
      <h1>{num}</h1>
      <h2>{nameage.name}</h2>
      <h1>{array}</h1>
      <button onClick={btnclicked}>click me</button>
    </div>
  );
};

export default Advancestate;
