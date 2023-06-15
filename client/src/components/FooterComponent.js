import React from 'react';
import LetterWrap from './LetterWrapComponent';

function Footer (props) {
    if (props.language === 'en') {
        var title = "let's work together?";
        var subtitle = "Send an email to";
        var toTop = 'back to top';
    } else {
        title = "давайте работать?";
        subtitle = "Отправьте письмо по адресу";
        toTop = 'наверх';
    }

    const backToTop = () => window.scrollTo(0, 0);

    const emailEnter = () => {
        document.getElementById('cursorText').classList.add('email');
        props.setCursorVariant('email');
        props.setCursorText('👋🏼');
        props.setCursorOffset(30);
    }
    const textEnter = () => {
        props.setCursorVariant('text');
        props.setCursorOffset(20);
    }
    const mouseLeave = () => {
        document.getElementById('cursorText').classList.remove('email'); // if was email
        props.setCursorVariant('default');
        props.setCursorText('');
        props.setCursorOffset(6);
    }

    return (
        <footer className='d-flex flex-column align-items-center'>
            <div id='footer-dot' onMouseEnter={textEnter} onMouseLeave={mouseLeave}>
                <i className='fa fa-circle' style={{fontSize: '0.5rem'}}></i>
            </div>

            <div id='footer-email' className='d-flex flex-column justify-content-center align-items-center'>
                <a href="mailto:mauro@polino.ru" className='text-center' target="_blank" rel="noopener noreferrer">
                    <span id='footer-email__title' data-aos="fade"
                        onMouseEnter={emailEnter} onMouseLeave={mouseLeave}>
                        {title}
                    </span>
                </a>
                
                <span id='footer-email__subtitle' className='text-center' data-aos="fade">
                    <span className='d-inline-block'>{subtitle}</span>
                    &nbsp;
                    <a id='footer-email__email' href="mailto:mchumpitazp@gmail.com" target="_blank" rel="noopener noreferrer">
                        <u className='py-3' onMouseEnter={emailEnter} onMouseLeave={mouseLeave}>
                            mchumpitazp@gmail.com
                        </u>
                    </a>
                    
                </span>
            </div>
                
            <div id='footer-nav' className='d-flex justify-content-between p-4'>
                <div id='footer-nav__socials' className='d-flex gap-5'>
                    <a href='https://wa.me/79251849503' target="_blank" rel="noopener noreferrer" 
                        className='text-md' onMouseEnter={textEnter} onMouseLeave={mouseLeave}>
                        <LetterWrap word={'whatsapp'} section={'footer'}/>
                    </a>
                    
                    <a href='https://github.com/mchumpitazp' className='text-md d-none d-md-block' target="_blank" rel="noopener noreferrer"
                        onMouseEnter={textEnter} onMouseLeave={mouseLeave}>
                        <LetterWrap word={'github'} section={'footer'}/>
                    </a>
                </div>

                <div id='footer-nav__btn-top' onClick={backToTop}
                    onMouseEnter={textEnter} onMouseLeave={mouseLeave}>
                    <span className='letter-wrap__word text-md'>
                        <span>{toTop}</span>
                        <i className='fa fa-long-arrow-up ps-2 pt-1'></i>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;