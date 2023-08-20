import Why from './Component2/Why';
import AboutFeild from './Components/Homepage/AboutFeild';
import Navbar from './Components/Homepage/Navbar';
import Slider from './Components/Homepage/Slider';
import Footer from './Footer';

function Display() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <AboutFeild/>
      <Why/><br/><br/><br/>
      <Footer/>
    </div>
  );
}

export default Display;
