import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App(props) {
  const [mode, setMode] = useState("light") //wether the dark mode is enable or not 
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1d1e63";
      showAlert("Dark Mode Enabled", "Success");
      document.title = "TextUtils-Dark Mode"
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light Mode Enabled", "Success");
      document.title = "TextUtils-Light Mode";
    }
  }

  const showAlert = (message, type) => {
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
      <Router>
        <Navbar title="Text Modifier" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
          <Route exact path="/about" >
              <About mode={mode} />
            </Route>
            <Route exact path="/" >
              <Textform heading="Enter the text to analyze below." showAlert={showAlert} mode={mode} toggleMode={toggleMode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;


