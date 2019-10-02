 import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import ServicesPage from './containers/ServicesPage';
import PortfolioPage from './containers/PortfolioPage';
import TeamPage from './containers/TeamPage';
import ContactPage from './containers/ContactPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/contact" component={ContactPage} />
        </Router>
      </header>
    </div>
  );
}

export default App;
