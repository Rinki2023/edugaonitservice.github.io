import './App.css';
import React from 'react';
import Why from './Component2/Why';
import AboutFeild from './Components/Homepage/AboutFeild';
import Header from './Components/Homepage/Header';
//simport Navbar from './Components/Homepage/Navbar';
import Slider from './Components/Homepage/Slider';
 import Footer from './Footer';
import Registration from './Login/Registration';

function App() {
  return (
    <div className="App">
        <Header/>
        {/* <Navbar/> */}
      <Slider/>
      <AboutFeild/> 
      <Registration/>
      <Why/><br/><br/><br/>
      <Footer/>
    </div>
  );
}

export default App;
