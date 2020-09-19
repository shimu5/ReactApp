import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import Menu from './components/MenuComponent.js';
import { DISHES } from './shared/dishes';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
    console.log("Menu Component Constructor invoked")
  }
  componentDidMount(){
    console.log("Menu Component Didmount invoked");
  }
  render() {
    console.log("Menu Component render invoked")
    return (
      <div className="App">
        <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
        </Navbar>
        <Menu dishes={this.state.dishes}> </Menu>
      </div>
    );
 } 
}
export default App;
