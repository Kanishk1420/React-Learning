import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const Index = () => {
  let count = 0;
  const [date, setdate] = useState(new Date().toLocaleTimeString());
  function increment() {
    count = count + 1; // Modifies an external variable, which is a side effect. a side effect is any operation that affects something outside the scope of the function being executed.
  }
  increment();
  console.log(count);
  useEffect(
    () => {
      // useffect hook in react is used to handlining side effects in functional components.
      // Your side effect logic here
      return () => {
        // Cleanup logic here (if needed)
      };
    },
    [
      /* dependencies */
    ],
  );
  useEffect(() => {
    setInterval(() => {
      const updatedDate = new Date();
      setdate(updatedDate.toLocaleTimeString());
    }, 1000);
  }, [date]);
  return (
    <div>
      <h1>Date:{date}</h1>
    </div>
  );
};

export default Index;
