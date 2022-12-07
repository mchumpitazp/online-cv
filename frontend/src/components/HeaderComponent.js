import React, { Component } from 'react';
import { Navbar, NavbarToggler, Nav, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header(props) {
    const [navState, setNav] = React.useState(false);

    const scrollToRef = (ref) => {
        if (ref) {
            ref.current.scrollIntoView({behavior: 'auto'});
            document.querySelector('#root').scrollBy(0, -(1.5 * ref.current.clientHeight));
        } else {
            document.querySelector('#root').scroll(0, 0);
        }
    }

    const handleClick = (ref) => {
        setNav(false);
        scrollToRef(ref);
    }

    return(
        <Navbar id='navbar' dark expand="md">
            <NavbarToggler onClick={() => setNav(!navState)} />

            <Collapse isOpen={navState} navbar>
                <Nav className='m-auto' navbar>
                    <NavItem>
                        <NavLink className="nav-link me-3" onClick={() => handleClick()}>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link me-3" onClick={() => handleClick(props.portfolioRef)}>
                            Portfolio
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link me-3" onClick={() => handleClick(props.skillsRef)}>
                            Skills
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link me-3" onClick={() => handleClick(props.experienceRef)}>
                            Experience
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" onClick={() => handleClick(props.recordsRef)}>
                            Records
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;