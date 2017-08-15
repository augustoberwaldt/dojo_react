import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Body from   './componets/Body.js'
import  Head from   './componets/Head.js'
import  Footer from   './componets/Footer.js'



class App extends Component {
  render() {
    return (
      <div className="App">
	     <Head> </Head> 
         <Body> </Body>
         <Footer> </Footer>  		 
      </div>
    );
  }
}

export default App;
