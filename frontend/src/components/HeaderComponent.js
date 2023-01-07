import React from 'react';
import { Navbar, NavbarToggler, Nav, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

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

            <Nav className='m-auto' navbar>
                <Collapse isOpen={navState} color="white" navbar>
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
                </Collapse>        
                <NavItem>
                    <a className="nav-link me-4" href={`${baseUrl}/files/resume.pdf`} target="_blank" rel="noopener noreferrer"
                        style={{color:'white'}}>
                        Resume
                    </a>
                </NavItem>   
            </Nav>    
            
        </Navbar>
    );
}

export default Header;