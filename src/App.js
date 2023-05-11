import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import ContactUs from './ContactUs/ContactUs';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div>
        <Navbar />
          <div className='content'>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/about'>
                <About />
              </Route>
              <Route exact path='/contact'>
                <ContactUs />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
