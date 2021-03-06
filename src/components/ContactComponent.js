import React, {Component} from 'react';
import {Form, FormGroup, Col, Button, Label, Input, FormFeedback} from 'reactstrap';
import {Link} from 'react-router-dom';

class Contact extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: "Telephone",
            message: "",
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked: target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        console.log("Current state is: " + JSON.stringify(this.state));
        alert("Current state is: " + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur = (field) => (event) =>{
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    validate(firstname, lastname, telnum, email){
        const errors = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: ""
        }

        if(this.state.touched.firstname){
            if(firstname.length < 3)
                errors.firstname = "Length of first name must be >= 3";
            else if(firstname.length > 20)
                errors.firstname = "Length of first name must be <=20";
        }
        
        if(this.state.touched.lastname){
            if(lastname.length < 3)
                errors.lastname = "Length of last name must be >= 3";
            else if(lastname.length > 20)
                errors.lastname = "Length of last name must be <=20";
        }

        //Regular expression for checking if all inputs are numbers
        const reg = /^\d+$/;
        if(this.state.touched.telnum && !reg.test(telnum)){
            errors.telnum = "Telephone number should contain only numbers";
        }
        else if(this.state.touched.telnum && telnum.length !== 10){
            errors.telnum = "Telephone number length must be 10";
        }

        if(this.state.touched.email) {
            if(email.split("").filter(x => x === '@').length != 1){
            errors.email = "Invalid email"
            }
            if(email.split("").filter(x => x === '.').length === 0){
                errors.email="Invalid email"
            }
        }

        return errors;
    }

    render(){
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className='row row-content'>
                        <div className='col-12'>
                            <h3>Send us Your Feedback</h3>
                        </div>
                        <div className='col-12'>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="firstname" md={3}>First Name</Label>
                                    <Col md={9}>
                                        <Input type="text" id="firstname" name="firstname" 
                                        placeholder="First Name" value={this.state.firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={this.handleBlur('firstname')}
                                        onChange = {this.handleInputChange} 
                                        />
                                        <FormFeedback>{errors.firstname}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="lastname" md={3}>Last Name</Label>
                                    <Col md={9}>
                                        <Input type="text" id="lastname" name="lastname" 
                                        placeholder="Last Name" value={this.state.lastname}
                                        onChange = {this.handleInputChange} 
                                        onBlur={this.handleBlur('lastname')}
                                        valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        />
                                        <FormFeedback>{errors.lastname}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="telenum" md={3}>Contact Number</Label>
                                    <Col md={9}>
                                        <Input type="tel" id="telnum" name="telnum" 
                                        placeholder="Contact Number" value={this.state.telnum}
                                        onChange = {this.handleInputChange} 
                                        onBlur={this.handleBlur('telnum')}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}/>
                                        <FormFeedback>{errors.telnum}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md={3}>Email</Label>
                                    <Col md={9}>
                                        <Input type="email" id="email" name="email" 
                                        placeholder="Email" value={this.state.email}
                                        onChange = {this.handleInputChange} 
                                        onBlur={this.handleBlur('email')}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        />
                                        <FormFeedback>{errors.email}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="message" md={3}>Feedback</Label>
                                    <Col md={9}>
                                        <Input type="textarea" id="message" name="message" 
                                        rows="6" placeholder="Your feedback here!" value={this.state.message}
                                        onChange = {this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size:5, offset:3}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" name="agree" 
                                                checked={this.state.agree} onChange = {this.handleInputChange}/> {" "}
                                                <strong>May we contact you?</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={{size:3, offset:1}}>
                                        <Input type="select" name="contactType" 
                                        value={this.state.contactType}
                                        onChange = {this.handleInputChange}>
                                            <option>Telephone</option>
                                            <option>Email</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 9, offset:3}}>
                                        <Button type="submit" color="primary">
                                            Send Feedback
                                        </Button>
                                    </Col>
                                </FormGroup> 
                            </Form>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Contact;