import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/ContactUs'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      {/* <Route path="/" element={<Navigate to="/home" />} />  */}
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="/option2" element={<About />} />
      <Route path="/option3" element={<Services />} />
      <Route path="/option4" element={<Contact />} />
      <Route path="*" element={<Home />} />
        {/* <Route path='/option2' exact component={Services} />
        <Route path='/option3' exact component={Products} />
        <Route path='/option4' exact component={SignUp} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
