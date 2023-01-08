import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavItem } from 'reactstrap';
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
            
            <Collapse isOpen={navState} navbar>
                
            <Nav className='m-auto' navbar>
                <NavItem>
                    <NavLink className="nav-link mx-3" onClick={() => handleClick()}>
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link mx-3" onClick={() => handleClick(props.portfolioRef)}>
                        Portfolio
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link mx-3" onClick={() => handleClick(props.skillsRef)}>
                        Skills
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link mx-3" onClick={() => handleClick(props.experienceRef)}>
                        Experience
                    </NavLink>
                </NavItem>
                <NavItem> 
                    <a className="nav-link mx-3 d-none d-md-block" href={`${baseUrl}/files/resume.pdf`} target="_blank" rel="noopener noreferrer"
                        style={{color:'white'}}>
                        Resume
                    </a>
                </NavItem>
            </Nav>    
            </Collapse>

            <a className="nav-link my-2 ms-3 me-auto d-block d-md-none" href={`${baseUrl}/files/resume.pdf`} target="_blank" rel="noopener noreferrer"
                style={{color:'white'}}>
                Resume
            </a>
        </Navbar>
    );
}

export default Header;