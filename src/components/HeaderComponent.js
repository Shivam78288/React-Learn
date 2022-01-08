import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, 
    NavItem,Jumbotron, Modal, ModalHeader, ModalBody, Button,
    Form, FormGroup, Input, Label} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
        //The toggleNav is bound to this.
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event){
        this.toggleModal();
        alert("Username = " + this.username.value + "\nPassword = " + this.password.value
                + "\nRemember = "+ this.remember.checked );
        event.preventDefault();
    }

    render(){
        
        return(
            <>
                <Navbar dark expand="md" className="fixed-top">
                    <div className='container'>
                        <NavbarBrand>
                            <NavLink to="/home"><img className="mr-auto" src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion"/></NavLink>
                        </NavbarBrand>
                        <NavbarToggler className="ml-auto" onClick = {this.toggleNav}/>
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <NavLink className="nav-link text-center" to="/home">
                                        <span className='fa fa-home mr-1'></span>
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-center" to="/menu">
                                        <span className='fa fa-utensils mr-1'></span>
                                        Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-center" to="/aboutus">
                                        <span className='fa fa-info mr-1'></span>
                                        About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-center" to="/contactus">
                                        <span className='fa fa-address-card mr-1'></span>
                                        Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav class="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className='fa fa-sign-in'>Login</span>
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className='container'>
                        <div className='row row-header'>
                            <div className='col-12 col-sm-12 col-md-6'>
                                <h1>Ristorante Con Fusion</h1>
                                <p>
                                We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!
                                </p>
                            </div>
                        </div>
                    </div> 
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit= {this.handleLogin}>
                            <FormGroup>
                                <Label id="usernameLabel" htmlFor="username">Username</Label>
                                <Input id="username" type="username" name="username"
                                 innerRef={(input) => this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label id="passwordLabel" htmlFor="password">Password</Label>
                                <Input id="password" type="password" name="password"
                                innerRef={(input) => this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="remember"
                                    innerRef={(input) => this.remember = input}/>
                                    Remember me?
                                </Label>
                            </FormGroup>
                            <Button color="primary" id="loginButton" class="mt-100" type="submit">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header;