import React from "react";
import { useState } from "react";
const SearchBar = () => {
const [text, settext] = useState('');
const handlesubmit = (e)=>{
    e.preventDefault();
    console.log(text);
    settext('');
}
  return (
    <div>
      <form className=" flex bg-gray-900 gap-5 p-10" onSubmit={(e)=>handlesubmit(e)}>
        <input 
        type="text"
        value={text}
        onChange={(e)=>settext(e.target.value)}
        required
        className=" w-full border-2 px-4 py-2 text-xl rounded outline-none" 
        placeholder="Search anything..." />
        <button className="border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer active:scale-0.95">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
