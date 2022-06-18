import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import OurCenters from './components/pages/OurCenters';
import Fir from './components/pages/Fir';
import LossReport from './components/pages/LossReport';
import CrimeReport from './components/pages/CrimeReport';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/fir' component={Fir} />
          <Route path='/lr' component={LossReport} />
          <Route path='/cr' component={CrimeReport} />
          <Route path='/our-centers' component={OurCenters} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
