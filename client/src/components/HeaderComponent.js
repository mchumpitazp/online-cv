import React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import LetterWrap from './LetterWrapComponent';
import $ from 'jquery';

function Header (props) {
    const wordsEn = ['mauro', 'work', 'contact'];
    const wordsRu = ['мауро', 'проекты', 'контакт'];
    const words = props.language === 'en' ? wordsEn : wordsRu;

    React.useEffect(() => {
        const introAnimation = () => {
            setTimeout(() => {
                let words = $('.letter-wrap__word');
                let index = 0;
    
                let delay = setInterval(() => {
                    if (index <= 3) {
                        $(words[index]).addClass('hover');
                        index++;
                    } else {
                        clearInterval(delay);
                        $('.letter-wrap__word').removeClass('hover');
                    }
                }, 150);
            }, 1000);
        }

        introAnimation();
    }, []);

    const textEnter = () => {
        props.setCursorVariant('text');
        props.setCursorOffset(20);
    }

    const textLeave = () => {
        props.setCursorVariant('default');
        props.setCursorOffset(6);
    }

    return(
        <React.Fragment>
            <Navbar dark expand="xs">
                <Nav navbar>
                    <NavItem className='me-auto p-2'
                            onMouseEnter={textEnter} onMouseLeave={textLeave}>
                            <LetterWrap word={words[0]} section={'header'}/>
                    </NavItem>
                    <NavItem className='d-none d-md-block'>
                        <a className="nav-link" href="#portfolio"
                            onMouseEnter={textEnter} onMouseLeave={textLeave} >
                            <LetterWrap word={words[1]} section={'header'}/>
                        </a>
                    </NavItem>
                    {/* <NavItem className='d-none d-md-block'>
                        <NavLink className="nav-link ms-3" onClick={() => handleClick(props.skillsRef)}
                            onMouseEnter={textEnter} onMouseLeave={textLeave} >
                            <LetterWrap word={words[2]} section={'header'}/>
                        </NavLink>
                    </NavItem> */}
                    <NavItem>
                        <NavLink className="nav-link ms-4" onClick={() => window.scrollTo(0, document.body.scrollHeight)}
                            onMouseEnter={textEnter} onMouseLeave={textLeave} >
                            <LetterWrap word={words[2]} section={'header'}/>
                        </NavLink>
                    </NavItem>
                </Nav>    
            </Navbar>
        </React.Fragment>
    );
}

export default Header;