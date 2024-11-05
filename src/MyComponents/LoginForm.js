import React, { useState } from "react";
export default function Textform(props) {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [login, setLogin] = useState("");
  const [alert, setalert] = useState("");

  // Handler for clearing the form
  const handle = () => {
    if (text === "" || password === "") {
      setalert("You can't leave these fields empty");
      setTimeout(() => {
        setalert("");
      }, 1700);
    } else {
      setalert("");
      setLogin("Login Successfully");
      setTimeout(() => {
        setLogin("");
        setText("");
        setPassword("");
      }, 2000);
    }
  };

  // Handler for updating the text input
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Handler for updating the password input
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Toggle function for showing/hiding password
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      {alert && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>{alert}</strong>
          <button type="button" onClick={() => setalert("")}></button>
        </div>
      )}
      <form className="w-full max-w-md mx-auto p-4 my-4">
        {/* Full Name Input */}
        <div className="flex flex-col mb-4">
          <label
            className={`block font-semibold text-lg ${
              props.mode === "light" ? "text-gray-800" : "text-white"
            }`}
            htmlFor="inline-full-name"
          >
            Full Name
          </label>
          <input
            className={`appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-purple-500 ${
              props.mode === "light"
                ? "bg-gray-100 text-gray-700 border-gray-200 focus:bg-white"
                : "bg-gray-700 text-white border-gray-600 focus:bg-gray-800"
            }`}
            id="inline-full-name"
            type="text"
            value={text}
            onChange={handleTextChange}
          />
        </div>

        {/* Password Input */}
        <div className="flex flex-col mb-4">
          <label
            className={`block font-semibold text-lg ${
              props.mode === "light" ? "text-gray-800" : "text-white"
            }`}
            htmlFor="inline-password"
          >
            Password
          </label>
          <input
            className={`appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-purple-500 ${
              props.mode === "light"
                ? "bg-gray-100 text-gray-700 border-gray-200 focus:bg-white"
                : "bg-gray-700 text-white border-gray-600 focus:bg-gray-800"
            }`}
            id="inline-password"
            type={passwordShown ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            placeholder="********"
          />
          <button
            type="button"
            onClick={togglePassword}
            className="mt-1 text-sm text-purple-500 focus:outline-none"
          >
            {passwordShown ? "Hide" : "Show"} Password
          </button>
        </div>

        {/* Sign Up Button */}
        <div className="flex justify-center my-4">
          <button
            className="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handle}
          >
            Sign Up
          </button>
        </div>
      </form>
      {login && (
        <div
          className={`mt-4 ${
            props.mode === "light" ? "text-gray-700" : "text-white"
          } font-bold text-center`}
        >
          <span>{login}</span>
        </div>
      )}
    </>
  );
}
