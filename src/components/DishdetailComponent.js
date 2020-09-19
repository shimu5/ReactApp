
import React, {Component} from 'react';
import { Form } from 'reactstrap';
import{Card, CardImg, CardTitle,CardText, CardBody} from 'reactstrap';

class Dishdetail extends Component{
    
    constructor(props){
        super(props);
    }

     renderDish(dish) {
        if (dish != null)
        {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else
            return(
                <div></div>
            );
        }

        renderComments(dish) {
            var commentList=null;
            if (dish != null)
            {
                 commentList= dish.comments.map((comment) => {
                    return(
                        <li key={comment.id} >
                            {comment.comment}
                            <br /><br />
                            -- {comment.author}, {comment.date}
                            <br /><br />
                        </li>
                    );
                });
            }  
            else{
                 commentList =  <li>No comments found</li>;
            }  
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentList}
                    </ul>
                </div>
            );
        }

    render(){
        if(this.props.selectedDish!=null)
            return (
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish)}
                    </div>
                </div>
            );
        else 
            return(
                <div className="row"></div>
            );
    }
}
export default Dishdetail;