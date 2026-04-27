import React from "react";
import "../index.css";

const Forms = () => {
  const submithandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    // Main container: full screen height, black background
    <div className="min-h-screen flex flex-col lg:flex-row text-white bg-black">
      
      {/* LEFT COLUMN: The Form */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex justify-center lg:justify-start lg:border-r-2 lg:border-white">
        <div className="w-full max-w-lg lg:ml-8">
          
          {/* New Add Notes Heading */}
          <h1 className="text-4xl font-bold mb-8">Add Notes</h1>
          
          <form
            onSubmit={submithandler}
            className="flex flex-col gap-6" 
          >
            <input
              type="text"
              placeholder="Enter Notes Heading"
              className="px-5 py-4 border-2 border-white bg-transparent w-full outline-none rounded-md text-lg"
            />
            <textarea
              placeholder="Write Details"
              className="px-5 py-4 w-full text-lg h-56 border-2 border-white bg-transparent outline-none rounded-md resize-none"
            />
            <button className="bg-white text-black font-bold rounded-md text-xl py-3 w-full outline-none cursor-pointer hover:bg-gray-200 transition">
              Add Note
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT COLUMN: The Notes Display */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16">
        <h1 className="text-4xl font-bold mb-8 lg:ml-8">Recent Notes</h1>
        <div className="flex flex-wrap gap-6 lg:ml-8">
          <div className="h-72 w-52 rounded-3xl bg-white shadow-lg"></div>
          <div className="h-72 w-52 rounded-3xl bg-white shadow-lg"></div>
        </div>
      </div>

    </div>
  );
};

export default Forms;