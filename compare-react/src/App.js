import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import Home from './components/Home/Home';
// import Faq from './components/Faq/Faq';
// import { Route } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div className="App">

        <Header />


        <Footer />
      </div>
    );
  }
}

export default App;
