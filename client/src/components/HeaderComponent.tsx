import React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import LetterWrap from './LetterWrapComponent';
import $ from 'jquery';

interface HeaderProps {
    language: string,
    setCursorVariant: (variant: string) => void,
    setCursorOffset: (offset: number) => void,
}

function Header (props: HeaderProps) {
    const wordsEn = ['mauro', 'work', 'contact', 'available', 'for work'];
    const wordsRu = ['мауро', 'проекты', 'контакт', 'доступен', 'для работы'];
    const words = props.language === 'en' ? wordsEn : wordsRu;

    React.useEffect(() => {
        const isTouchDevice = () => (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
        if (isTouchDevice()) $('.navbar').addClass('touch-screen');
        
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
            <Navbar dark expand="xs" className='p-4'>
                <Nav navbar>
                    <NavItem className='text-nav me-auto py-2'
                            onMouseEnter={textEnter} onMouseLeave={textLeave}>
                            <LetterWrap word={words[0]} section={'header'}/>
                    </NavItem>
                    <NavItem className='d-none d-md-block'>
                        <a className="nav-link text-nav me-5" href="#portfolio"
                            onMouseEnter={textEnter} onMouseLeave={textLeave} >
                            <LetterWrap word={words[1]} section={'header'}/>
                        </a>
                    </NavItem>
                    <NavItem className="nav-link text-nav" onClick={() => window.scrollTo(0, document.body.scrollHeight)}
                            onMouseEnter={textEnter} onMouseLeave={textLeave} >
                            <LetterWrap word={words[2]} section={'header'}/>
                    </NavItem>
                </Nav>    
                <div className='available'>
                    <div className='available-text text-center text-nav' onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <span className='regular d-block'>{words[3]}</span> <span>{words[4]}</span>
                    </div>
                </div>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;