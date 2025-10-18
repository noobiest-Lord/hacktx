import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LifestyleQuestions from './components/LifestyleQuestions';
import FinancialQuestions from './components/FinancialQuestions';
import Services from './components/Services';
import Incentives from './components/Incentives';
import Extras from './components/Extras';
import Vehicles from './components/Vehicles';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/vehicles">Vehicles</Link></li>
            <li><Link to="/lifestyle">Lifestyle</Link></li>
            <li><Link to="/financial">Financial</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/incentives">Incentives</Link></li>
            <li><Link to="/extras">Extras</Link></li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/lifestyle" element={<LifestyleQuestions />} />
            <Route path="/financial" element={<FinancialQuestions />} />
            <Route path="/services" element={<Services />} />
            <Route path="/incentives" element={<Incentives />} />
            <Route path="/extras" element={<Extras />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Welcome to Toyota Financial Services</h1>
    <p>Your one-stop solution for all your car financing needs.</p>
  </div>
);

export default App;
