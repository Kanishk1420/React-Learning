import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('');
  const [alert, setAlert] = useState({ message: '', type: '' });

  // Function to show alert
  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert({ message: '', type: '' });
    }, 1500);
  };

  const handleUppercase = () => {
    if (text === '') {
      showAlert('Please enter text before converting.', 'danger');
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      showAlert('Converted to uppercase!', 'success');
    }
  };

  const handleLowercase = () => {
    if (text === '') {
      showAlert('Please enter text before converting.', 'danger');
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      showAlert('Converted to lowercase!', 'success');
    }
  };

  const handleClear = () => {
    if (text === '') {
      showAlert('Textarea is already empty.', 'danger');
    } else {
      setText('');
      showAlert('Text cleared!', 'success');
    }
  };

  const handleRemoveSpaces = () => {
    if (text === '') {
      showAlert('Please enter text before removing spaces.', 'danger');
    } else {
      let newText = text.split(/[ ]+/).join(' ');
      setText(newText);
      showAlert('Extra spaces removed!', 'success');
    }
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className={`container mx-auto p-4 sm:p-6 text-${props.mode === 'light' ? 'black' : 'white'}`}>
        <label className="block text-lg font-bold mb-2 text-center sm:text-left" htmlFor="message">
          Your Message
        </label>
        
        <textarea
          id="message"
          className={`appearance-none border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:border-purple-500 ${
            props.mode === 'light'
              ? 'bg-gray-200 text-gray-700 border-gray-200 focus:bg-white'
              : 'bg-gray-700 text-white border-gray-600 focus:bg-gray-800'
          }`}
          rows="4"
          placeholder="Enter your message here..."
          onChange={handleTextChange}
          value={text}
        ></textarea>
        
        {/* Alert Message */}
        {alert.message && (
          <div className={`alert alert-${alert.type} alert-dismissible fade show mt-3`} role="alert">
            <strong>{alert.message}</strong>
          </div>
        )}

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 mt-4">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded text-sm sm:text-base"
            type="button"
            onClick={handleUppercase}
          >
            Uppercase
          </button>
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded text-sm sm:text-base"
            type="button"
            onClick={handleLowercase}
          >
            Lowercase
          </button>
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded text-sm sm:text-base"
            type="button"
            onClick={handleClear}
          >
            Clear
          </button>
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded text-sm sm:text-base"
            type="button"
            onClick={handleRemoveSpaces}
          >
            Remove Spaces
          </button>
        </div>

        {/* Text Summary */}
        <div className={`container my-3 text-${props.mode === 'light' ? 'black' : 'white'}`}>
          <h1 className="text-lg font-semibold mt-4 text-center sm:text-left">Your Text Summary</h1>
          <p className="text-sm sm:text-base">
            Words: <b>{text.split(/\s+/).filter((element) => element.length !== 0).length}</b> | Characters: <b>{text.length}</b>
          </p>
        </div>
      </div>
    </>
  );
}
