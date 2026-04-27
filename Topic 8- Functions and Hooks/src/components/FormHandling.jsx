import React from "react";
import { useState } from "react";
const FormHandling = () => {
  const [title, settitle] = useState('');
  function handlesumbit(e) {
    e.preventDefault(); // this will prevent the default behavior of the form which is to refresh the page when the form is submitted, so that we can handle the form submission in our own way without losing the state of our application.
    console.log("Form Handling", title);
    // We aren't using React; instead, the site submits the form by reloading the page. Because of this, we'll implement two-way binding.
    settitle('');
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm flex flex-col gap-5"
        onSubmit={handlesumbit}
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
          User Details
        </h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e)=>{
              settitle(e.target.value)
          }}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-700"
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-colors">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormHandling;
