import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Menu from './MenuComponent.js';
import Dishdetail from './DishdetailComponent';
import Child from './Child';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
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
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    return (
      <div className="App">
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route exact path="/contactus" component={Contact}/>
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
