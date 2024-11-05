import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './MyComponents/Header';
import LoginForm from "./MyComponents/LoginForm";
import TextForm from './MyComponents/TextForm';
import About from './MyComponents/About';

function App() {
  const [darkmode, setdarkmode] = useState('light'); // Whether light mode is enabled 

  const tooglemode = () => {
    if (darkmode === 'light') {
      setdarkmode('dark');
      document.body.style.backgroundColor = '#212544';
    } else {
      setdarkmode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      <Header title="TextUtils" mode={darkmode} tooglemode={tooglemode} />
      <LoginForm mode={darkmode} tooglemode={tooglemode} />
      <TextForm mode={darkmode} tooglemode={tooglemode} />
      <About mode={darkmode} tooglemode={tooglemode} />
    </>
  );
}

export default App;