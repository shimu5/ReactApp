import React, {Component} from 'react';
import './App.css';
import Main from './components/MainComponent.js';
import { BrowserRouter } from 'react-router-dom';

class App extends Component{
  constructor(props) {
    super(props);
    console.log("Menu Component Constructor invoked")
  }
  componentDidMount(){
    console.log("Menu Component Didmount invoked");
  }
  render() {
    console.log("Menu Component render invoked")
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    );
 } 
}
export default App;
