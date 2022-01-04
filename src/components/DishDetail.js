import React, { Component } from 'react';
import {Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap';

class DishDetail extends Component{

    render(){
        const dish = this.props.selectedDish;
        
        if(dish != null){
            const comment = dish.comments.map((item) => {
                return(
                            <div key={item.id}>
                                <p>{item.comment}</p>
                                <p>--{item.author}, &nbsp;
                                {new Intl.DateTimeFormat('en-US', {year: 'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))}</p>
                            </div>        
                    
                );
            });
            return(
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-5 m-1'>
                            <Card>
                                <CardImg width="100%" alt={dish.name} src={dish.image}/>
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className='col-12 col-md-5 m-1'>
                            <h4>Comments</h4>
                                {comment}
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return (<div />);
        }
    }
}
export default DishDetail;