// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not.

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('dark');
  //   document.body.classList.remove('light');
  //   document.body.classList.remove('primary');
  //   document.body.classList.remove('danger');
  //   document.body.classList.remove('success');
  //   document.body.classList.remove('warning');
  // }

  const toggleMode = (cls) => {
    // removeBodyClasses();
    document.body.classList.add(`bg-${cls}`)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // document.body.style.color = 'white';
      showAlert("Dark mode has been Enabled", "success");
      // document.title = 'TextUtils - Home - DarkMode';
      
    } 
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'black';
      showAlert("Light mode has been Enabled", "success");
      // document.title = 'TextUtils - Home';
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
    <Router>
      <Navbar title="TextUtils" aboutText="AboutUs" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
       <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Try Textutils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />}/>
           {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> */}
       </Routes>
      </div>
     </Router> 
    </>
  );
}

export default App;
