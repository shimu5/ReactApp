import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent.js';
import Dishdetail from './DishdetailComponent';
import Child from './Child';

class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish : null,
      unit: 'Kg',
    };  
  }
  ChangeUnit(itemUnit){
    this.setState({unit:itemUnit})
  }   
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  } 

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
        </Navbar>
        <Menu dishes={this.state.dishes}  onClick={(dishId) => this.onDishSelect(dishId)} > </Menu> 
        <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Child data={
          {
            unit:this.state.unit,
            ChangeUnit:this.ChangeUnit.bind(this)
          }
          }></Child>
      </div>
    );
 } 
}
export default Main;
