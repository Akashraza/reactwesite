import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Section from './Section';
import Accordion from './accordion';
import Contact from './Contact';
import Footer from './Footer';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
     <Header />
      <Switch>
        <Route exact path="/" component={Home} />
     <Route exact path="/About" component={About} />
     <Route exact path="/Section" component={Section} />
      <Route  exact path="/Accordion" component={Accordion} />
      <Route  exact path="/Contact" component={Contact} />
       <Redirect to="/" />
      </Switch>
     <Footer />
    </>
  );
}

export default App;
