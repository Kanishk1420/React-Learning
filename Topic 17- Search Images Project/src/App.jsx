import React from "react";
import { fetchphotos } from "./api/mediaapi";

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-950 text-white">
      <button
        onClick={async () => {
          const data = await fetchphotos("office");
          console.log(data.results);
        }}
      >
        Get Photos
      </button>
    </div>
  );
};

export default App;
