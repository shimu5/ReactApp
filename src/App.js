import React, {Component} from 'react';
import './App.css';
import Main from './components/MainComponent.js';


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
      <div className="App">
        <Main />
      </div>
    );
 } 
}
export default App;
