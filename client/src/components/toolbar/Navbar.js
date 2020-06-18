import React from 'react'
import { Navbar, NavDropdown, Nav, NavbarBrand, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authActions';

class Navigationbar extends React.Component{

    onLogoutClick = e =>{
        e.preventDefault();
        this.props.logoutUser();
    };

    render(){
        const { user } = this.props.auth;
        return(

            <Navbar bg="dark" variant="dark">
                <NavbarBrand className="ml-5 mr-auto" href="#home">
                    React
                </NavbarBrand>
                    
                    <Nav className="ml-auto">
                    <Image src="" roundedCircle/>
                    <NavDropdown title={user.name} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={this.onLogoutClick}>Log Out</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                
            </Navbar>
        ); 
    }
}

Navigationbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps,{logoutUser})(Navigationbar);

                    
                   