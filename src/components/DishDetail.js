import React, { Component } from 'react';
import {Card, CardBody, CardTitle, CardImg, CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

class DishDetail extends Component{

    render(){
        const dish = this.props.selectedDish;
        const comments = this.props.comments;
        
        if(dish != null){
            const comment = comments.map((item) => {
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
                    <div className='row ml-1'>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/home">Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link to="/menu">Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                <Link to={`/menu/${dish.id}`}>{dish.name}</Link>
                            </BreadcrumbItem>
                            
                        </Breadcrumb>
                    </div>
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