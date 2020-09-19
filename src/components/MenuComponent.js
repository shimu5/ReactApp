import React, {Component} from 'react';
//import {Media} from 'reactstrap';
import { Card, CardBody, Button, CardTitle, CardText, CardImg, CardImgOverlay  } from 'reactstrap';
import Dishdetail from './DishdetailComponent.js';
class Menu extends Component{

    constructor(props){
        super(props);
        this.state = {
          selectedDish: null
        }
      }
      
      onDishSelect(dish) {
        this.setState({ selectedDish: dish});
      } 

    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
              </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <Dishdetail selectedDish={this.state.selectedDish} />
            </div>
        );
    }
}

export default Menu;