// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextArea from './component/TextArea';
// import PropTypes from 'prop-types'
import { PropTypes } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// import { Routes ,Route } from 'react-router-dom';


// import React from "react";


// let text = "hello World";

// function name(name) {
//   console.log(`My Name is ${name}`);
// }

function App(props) {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Enabled", "success");
      // document.body.style.color = "white";
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");

      // document.body.style.color = "black";
    }
  }


  return (
    <Router>
      <div className='wrapper'>
        <Navbar title="HelO" mode={mode} toggleMode={toggleMode} name="Home" about="About Us" contact="Contact Us" />
        <Alert alert={alert} />
        <div className=" container">
          <Routes>
            <Route exact path="/" element={<TextArea showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />}></Route>
            <Route exact path='/about' element={<About />}>
            </Route>
            <Route exact path='*' element={<h1>ERROR! 404 Page Not Found</h1>}>
            </Route>
          </Routes>
        </div>
      </div>
    </Router >
  );
}

export default App;
