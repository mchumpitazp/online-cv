import React, { Component } from 'react';
import { Navbar, NavbarToggler, Nav, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <Navbar id='navbar' dark expand="md">
                <NavbarToggler onClick={this.toggleNav} />

                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav className='m-auto' navbar>
                        <NavItem>
                            <NavLink className="nav-link me-3" to="/portfolio">
                                Portfolio
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link me-3" to="/skills">
                                Skills
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link me-3" to="/experience">
                                Experience
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/records">
                                Records
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;