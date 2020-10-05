import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent.js';
import Dishdetail from './DishdetailComponent';
import Child from './Child';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
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
    const HomePage = () => {
      return(
          <Home />
      );
    }
    return (
      <div className="App">
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
          </Switch>
         {/*<Child data={
          {
            unit:this.state.unit,
            ChangeUnit:this.ChangeUnit.bind(this)
          }
          }></Child>*/}
           <Footer />
      </div>
    );
 } 
}
export default Main;
