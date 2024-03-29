import React from "react";
import LetterWrap from "./LetterWrapComponent";
import $ from 'jquery';

interface HeroProps {
    language: string,
    darkMode: boolean
    setLanguage: (language: string) => void,
    setCursorVariant: (variant: string) => void,
    setCursorOffset: (offset: number) => void,
    setDarkMode: (dark: boolean) => void
}

function Hero (props: HeroProps) {
    if (props.language === 'en') {
        var english = 'en';
        var russian = 'ru';
        var mode = ['dark mode', 'light mode'];
    } else {
        english = 'ан';
        russian = 'ру';
        mode = ['темный режим', 'светлый режим'];
    }

    React.useEffect(() => {
        const heroShadow = document.getElementById('hero-shadow')!;
        const width1 = heroShadow.offsetWidth;
        const width2 = document.getElementById('hero__portrait')!.offsetWidth;
        heroShadow.style.width = (width1 - width2) / 2 + 'px';
        heroShadow.style.backgroundColor = '#1a1a1a';
        setTimeout( () => document.getElementById('hero__portrait-shadow')!.style.width = '0px', 600);
        heroShadow.style.width = '0px';
        document.getElementById('hero__portrait-img')!.style.transform = 'scale(1)';
    }, []);

    const textEnter = () => {
        props.setCursorVariant('text');
        props.setCursorOffset(20);
    }

    const textLeave = () => {
        props.setCursorVariant('default');
        props.setCursorOffset(6);
    }

    const switchColors = () => {
        const myColor = $('body').css('color');
        const myBgColor = $('body').css('backgroundColor');
        $('body').css('color', myBgColor);
        $('body').css('backgroundColor', myColor);
        $('#cursor').css('backgroundColor', myBgColor);
        props.setDarkMode(!props.darkMode);
    }
    
    return (
        <section id="hero" className="d-flex justify-content-center align-items-center">
            <div id="hero-shadow"></div>

            <div id="hero__portrait">
                <img id="hero__portrait-img" src="/portrait.jpg" alt="portrait" />
                <div id="hero__portrait-shadow"></div>
            </div>

            <div id="hero__footer" className="d-flex justify-content-between py-3 px-4">
                <div className="text-md d-flex align-items-center" onMouseEnter={textEnter} onMouseLeave={textLeave} onClick={switchColors}>
                    <i className="fa fa-adjust pe-2"></i>
                    {
                        props.darkMode ?
                        <LetterWrap word={mode[0]} section={'hero'} />
                        :
                        <LetterWrap word={mode[1]} section={'hero'} />
                    }
                    
                </div>
                <div> 
                    <span className="text-md" onClick={() => props.setLanguage('en')}>
                        <LetterWrap word={english} section={'hero'} />
                    </span>
                    <span className="text-md px-2">|</span>
                    <span className="text-md" onClick={() => props.setLanguage('ru')}>
                        <LetterWrap word={russian} section={'hero'} />
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Hero;