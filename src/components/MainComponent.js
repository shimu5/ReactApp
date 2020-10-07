import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Menu from './MenuComponent.js';
import DishDetail from './DishDetailComponent.js';
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
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    return (
      <div className="App">
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route exact path="/contactus" component={Contact}/>
              <Route path='/menu/:dishId' component={DishWithId} />
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
