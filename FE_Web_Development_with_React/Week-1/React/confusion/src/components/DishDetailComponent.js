import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super (props);
        this.selectedDish = this.props.selectedDish;
    }

    renderDish(dish) {
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
        return (
            <div className="row">
                {this.renderDish(this.selectedDish)}
            </div>
        );
    }
}

export default DishDetail;