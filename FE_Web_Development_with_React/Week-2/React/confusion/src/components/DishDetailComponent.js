import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super (props);
        console.log("DishDetailComponent constructor is invoked");
    }
    
    componentDidMount() {
        console.log('DishDetail Component ComponentDidMount is invoked');
    }

    componentDidUpdate() {
        console.log('DishDetail Component ComponentDidUpdate is invoked');
    }

    reformatDate(date) {
        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric"
        });
    }

    renderComments(comments) {
        const all_comments = comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <ul className="list-unstyled">
                        <li> {comment.comment} </li>
                        <ul className="list-unstyled">
                            <li> -- {comment.author}, {this.reformatDate(comment.date)} </li>
                        </ul>
                    </ul>
                </div>
            );
        });

        return (
            <div>
                <h4> Comments </h4>
                {all_comments}
            </div>
        );
    }

    renderDish(dish) {
        console.log("DishDetail RenderDish called");
        if (dish) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.image} />
                            <CardBody>
                                <CardTitle> {dish.name} </CardTitle>
                                <CardText> {dish.description} </CardText>
                            </CardBody>
                            </Card>                        
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(dish.comments)}
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        console.log("DishDetail Component render invoked");
        const selectedDish = this.props.selectedDish;
        return (this.renderDish(selectedDish));
    }
}

export default DishDetail;