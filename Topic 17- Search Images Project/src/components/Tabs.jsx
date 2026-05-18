import React from "react";

const Tabs = () => {
  const tabs = ["Photos", "Videos", "Gifs"];
  return (
    <div className="flex gap-10 p-10 justify-center">
      {tabs.map(function (elem, idx) {
        return <button className="bg-gray-600 cursor-pointer active:scale-95 px-5 py-2 rounded uppercase" key={idx}>{elem}</button>;
      })}
    </div>
  );
};

export default Tabs;
