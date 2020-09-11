import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function reformatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
}

function RenderComments({ comments }) {
    const all_comments = comments.map((comment) => {
        return (
            <div key={comment.id}>
                <ul className="list-unstyled">
                    <li> {comment.comment} </li>
                    <ul className="list-unstyled">
                        <li> -- {comment.author}, {reformatDate(comment.date)} </li>
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

function RenderDish({ dish }) {
    console.log("DishDetail RenderDish called");
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
                    <RenderComments comments={dish.comments} />
                </div>
            </div>
        </div>
    );    
}

const DishDetail = (props) => {
    const selectedDish = props.selectedDish;
    if (props.selectedDish)
        return (
            <RenderDish dish={selectedDish} />            
        );
    else
        return (
            <div></div>
        );
}


export default DishDetail;