
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import bg from './bg.png';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const toggleAlert = (message, type)=>{
      setAlert({
        msg : message,
        type : type
      })

      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      toggleAlert("Dark mode enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';

      toggleAlert("Light mode enabled", "success");
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title = "  TextBloom"  mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>

    <div className="container my-5">

    {/* <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route> */}
        
          {/* <Route exact path="/"> */}
          <TextForm toggleAlert = {toggleAlert} heading = "Enter Your Text Here : " mode = {mode}/>
          {/* </Route> */}
    
    {/* </Switch> */}
    </div>

    <footer className="page-footer font-small blue" style = {{backgroundColor : 'black', color : 'white', bottom : 0, position : 'absolute', overflow : 'hidden', left : 0, width : '100%'}}>
      <div className="footer-copyright text-center py-3"> <strong> © 2021 Copyright:</strong>
  
      <a href="#"> <strong> TextUtils</strong></a>

      </div>
    </footer>
    {/* </Router> */}
    </>
  );
}

export default App;
