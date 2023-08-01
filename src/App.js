import './App.css';
import Navbar from './components/Navbar';
// import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
// import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
// } from "react-router-dom";

// import About from './components/About';

function App() {
  const [mode, setMode] = useState("light") //wether the dark mode is enable or not 
  const [alert, setAlert] = useState(null);

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor= "#1d1e63";
      showAlert("Dark Mode Enabled","success");
      document.title = "TextUtils-Dark Mode"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor= "white";
      showAlert("light Mode Enabled","success");
      document.title = "TextUtils-Light Mode";
    }
  }

    const showAlert = (message,type) =>{      
      setAlert({
        message: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
    }
  return (
    <>  
      <Navbar title="Text Utils" about="About us" mode={mode} toggleMode={toggleMode} />
      <Alert  alert={alert} />
      <div className="container my-3">
      {/* <Textform heading="Enter the text to analyze below." alert={alert} mode={mode} toggleMode={toggleMode}/> */}
      </div>
      <About /> 
    </>
  );
}

export default App;


