import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import {NavLink, Container, NavbarBrand} from 'react-bootstrap';
import './sidebar.css';
import {FaGithub, FaFacebook, FaInstagram, FaHome, FaCalendarDay, FaQuestionCircle, FaBell} from 'react-icons/fa';
import {FcTodoList} from 'react-icons/fc';
import {Link, useRouteMatch } from 'react-router-dom';

class Sidebar extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
          menuOpen: false
        }
        this.menu = this.menu.bind(this);
      }
    
      // This keeps your state in sync with the opening/closing of the menu
      // via the default means, e.g. clicking the X, pressing the ESC key etc.
      handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
      }
      
      // This can be used to close the menu, e.g. when a user clicks a menu item
      closeMenu () {
        this.setState({menuOpen: false})
      }
    
      // This can be used to toggle the menu, e.g. when using a custom icon
      // Tip: You probably want to hide either/both default icons if using a custom icon
      // See https://github.com/negomi/react-burger-menu#custom-icons
      toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
      }

      menu(){
        let {url} = useRouteMatch();
          return(
              <Menu  isOpen={this.state.menuOpen}
              onStateChange={(state) => this.handleStateChange(state)}>
                  <NavLink onClick={() => this.closeMenu()} className="nav-link">
                    <Link to={`${url}/`} style={{textDecoration: 'none'}}><FaHome style={{margin:'10px'}}/>Home</Link></NavLink>
                  <NavLink onClick={() => this.closeMenu()} className="nav-link">
                    <Link to={`${url}/notification`} style={{textDecoration: 'none'}}><FaBell style={{margin:'10px'}}/>Notification</Link></NavLink>
                  <NavLink onClick={() => this.closeMenu()} className="nav-link">
                    <Link to={`${url}/events`} style={{textDecoration: 'none'}}><FaCalendarDay style={{margin:'10px'}}/>Event Management</Link></NavLink>
                  <NavLink onClick={() => this.closeMenu()} className="nav-link">
                    <Link to={`${url}/todos`} style={{textDecoration: 'none'}}><FcTodoList style={{margin:'10px'}}/>To-Do</Link></NavLink>
                  <NavLink onClick={() => this.closeMenu()} className="nav-link">
                    <Link to={`${url}/faq`} style={{textDecoration: 'none'}}><FaQuestionCircle style={{margin:'10px'}}/>FAQ</Link></NavLink>
                  
                  <Container className="md-6 mt-auto ml-5">
                    <NavbarBrand style={{position: 'relative', left: '15px'}}>Developer</NavbarBrand>
                    <div className="row">
                    <NavLink><FaGithub/> </NavLink>
                    <NavLink><FaFacebook/></NavLink>
                    <NavLink><FaInstagram/></NavLink>
                  </div>
                  </Container>
              </Menu>
          );
        }

    render(){
      return <this.menu/>;
  }
}


export default Sidebar;