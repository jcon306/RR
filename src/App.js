import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import ContactUs from './ContactUs/ContactUs';

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    
      <div>
        <Navbar />
          <div className='content'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/contact' element={<ContactUs />} />
              
            </Routes>
          </div>
      </div>
  );
}

export default App;
