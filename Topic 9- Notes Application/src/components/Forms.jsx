import React from "react";
import "../index.css";

const Forms = () => {
  const [heading, setHeading] = React.useState("");
  const [details, setDetails] = React.useState("");
  const [notes, setNotes] = React.useState([]);
  const submithandler = (e) => {
    e.preventDefault();
    const copytask = [...notes];
    copytask.push({ heading, details });
    console.log(copytask);
    setNotes(copytask);
    setHeading("");
    setDetails("");
  };
  
  const deletehandler = (idx) =>{
    const copytask = [...notes];
    copytask.splice(idx,1);
    setNotes(copytask);
  }
  return (
    // Main container: full screen height, black background
    <div className="min-h-screen flex flex-col lg:flex-row text-white bg-black">
      {/* LEFT COLUMN: The Form */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex justify-center lg:justify-start lg:border-r-2 lg:border-white">
        <div className="w-full max-w-lg lg:ml-8">
          {/* New Add Notes Heading */}
          <h1 className="text-4xl font-bold mb-8">Add Notes</h1>

          <form onSubmit={submithandler} className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Enter Notes Heading"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              className="px-5 py-4 border-2 border-white bg-transparent w-full outline-none rounded-md text-lg"
            />
            <textarea
              placeholder="Write Details"
              value={details}
              className="px-5 py-4 w-full text-lg h-56 border-2 border-white bg-transparent outline-none rounded-md resize-none"
              onChange={(e) => setDetails(e.target.value)}
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
          {notes.map(function (element, idx) {
            return (
              <div
                key={idx}
                className= "flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                <h3 className="font-bold leading-tight text-xl">{element.heading}</h3>
                <p className="mt-3 leading-tight font-medium text-gray-500">{element.details}</p>
                <button className="w-full cursor-pointer active:scale-95 bg-red-600 py-1 text-sm rounded-xl font-bold text-white" onClick={()=>{deletehandler(idx)}}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Forms;
