import React from "react";
import { useState, useEffect } from "react";
const EffectPractice = () => {
  const [Counter, setCounter] = useState(0);
  const [Name, setName] = useState("");

  useEffect(() => {
    document.title = `You have clicked ${Counter} times`;
  }, [Counter]);

  useEffect(() => {
    console.log(Counter);
  }, [Counter]);

  useEffect(() => {
    console.log(Name);
  }, [Name]);

  return (
    <div>
      <p>
        Count: <span>{Counter}</span>
      </p>
      <button onClick={() => setCounter(Counter + 1)}>Increment</button>
      <p>
        Name: <span>{Name}</span>
      </p>
      <input
        type="text"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default EffectPractice;
