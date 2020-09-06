import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super (props);
        console.log("DishDetail constructor called");
    }

    renderDish(dish) {
        console.log("DishDetail RenderDish called");
        if (dish) {
            return (
                <div>
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
                        {/* comments go here */}
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
        console.log("DishDetail render called");
        const selectedDish = this.props.selectedDish;
        console.log(selectedDish);
        return (
            <div className="row">
                {this.renderDish(selectedDish)}
            </div>
        );
    }
}

export default DishDetail;