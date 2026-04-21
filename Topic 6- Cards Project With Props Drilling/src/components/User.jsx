import React from "react";

const User = () => {
  const arr = [
    {
      name: "Kanishk",
      age: 18,
    },
    {
      name: "Aman",
      age: 28,
    },
    {
      name: "Dileep",
      age: 29,
    },
  ];
  return (
    <div>
      {arr.map(function (element) {
        return <h1>{element.age}</h1>;
      })}
    </div>
  );
};

export default User;
