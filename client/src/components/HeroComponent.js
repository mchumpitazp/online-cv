import React from "react";
import LetterWrap from "./LetterWrapComponent";

function Hero (props) {
    if (props.language === 'en') {
        var english = 'en';
        var russian = 'ru';
    } else {
        english = 'ан';
        russian = 'ру';
    }

    React.useEffect(() => {
        const width1 = document.getElementById('hero-shadow').offsetWidth;
        const width2 = document.getElementById('hero__portrait').offsetWidth;
        document.getElementById('hero-shadow').style.width = (width1 - width2) / 2 + 'px';
        document.getElementById('hero-shadow').style.backgroundColor = '#1a1a1a';
        setTimeout( () => document.getElementById('hero__portrait-shadow').style.width = '0px', 600);
        document.getElementById('hero-shadow').style.width = '0px';
        document.getElementById('hero__portrait-img').style.transform = 'scale(1)';
        document.getElementById('hero__portrait-img').style.opacity = '0.8';
    }, []);
    
    return (
        <section id="hero" className="d-flex justify-content-center align-items-center">
            <div id="hero-shadow"></div>

            <div id="hero__portrait">
                <img id="hero__portrait-img" src="/portrait.jpg" alt="portrait" />
                <div id="hero__portrait-shadow"></div>
            </div>

            <div id="hero__footer" className="d-flex justify-content-between">
                <div> 
                    <span onClick={() => props.setLanguage('en')}>
                        <LetterWrap word={english} section={'hero'} />
                    </span>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <span onClick={() => props.setLanguage('ru')}>
                        <LetterWrap word={russian} section={'hero'} />
                    </span>
                </div>
                <span>&copy;2023</span>
            </div>
        </section>
    )
}

export default Hero;