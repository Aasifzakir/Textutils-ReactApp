// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not.

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // document.body.style.color = 'white';
      showAlert("Dark mode has been Enabled", "success");
      document.title = 'TextUtils - Home - DarkMode';
      // setInterval(() => {
      //   document.title = 'TextUtils is created by AasifZakir.';
      // }, 1500);
      // setInterval(() => {
      //   document.title = 'Use it now!!!';
      // }, 500);
    } 
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'black';
      showAlert("Light mode has been Enabled", "success");
      document.title = 'TextUtils - Home';
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 3000);
  }

  return(
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="AboutUs" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <Alert alert={alert}/>
      <div className="container my-3">
       {/* <Routes> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/> */}
           <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
       {/* </Routes> */}
      </div>
    {/*  </Router>  */}
       {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
    </>
  );
}

export default App;
