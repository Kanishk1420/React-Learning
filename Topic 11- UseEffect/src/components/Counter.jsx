import { useEffect, useState } from "react";

const Counter = () => {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  function callA() {
    console.log("Function A is called");
  }
  function callB() {
    console.log("Function B is called");
  }
  useEffect(
    function () {
      callA();
      console.log("useffect is running...");
    },
    [A],
  ); // Component got mounted but the useeffect will run only once. if we didnt pass the dependency array then the useeffect will run every time the component got re-rendered but if we pass the empty dependency array then the useeffect will run only once when the component got mounted
  useEffect(
    function () {
      callB();
      console.log("useffect is running...");
    },
    [B],
  );
  return (
    <div>
      <h1>Value of A is {A}</h1>
      <h1>Value of B is {B}</h1>
      <button onClick={() => setA(A + 1)}>Increment A</button>
      <button onClick={() => setB(B - 1)}>Increment B</button>
    </div>
  );
};

export default Counter;
