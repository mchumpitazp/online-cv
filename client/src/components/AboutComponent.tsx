import React from "react";
import LetterWrap from "./LetterWrapComponent";

interface AboutProps {
    language : string,
    setLanguage: (language: string) => void,
    setCursorVariant: (variant: string) => void,
    setCursorOffset: (offset: number) => void
}

function About (props: AboutProps) {
    if (props.language === 'en') {
        var title = "about me";
        var about = ["I'm Mauro Polino.", "A freelance web developer, oriented to scalability and performance."];
        //var about = ["I'm Mauro Polino.", "A freelance web developer, oriented to scalability and performance. I am passionate about software solutions for process automation."];
        var place = "Living in Moscow, Russia";
        var work = 'explore work';
    } else {
        title = "обо мне";
        //about = ["Я Мауро Полино.", "Веб-разработчик-фрилансер, ориентированный на масштабируемость. Я увлечен программными решениями для автоматизации."];
        about = ["Я Мауро Полино.", "Веб-разработчик, ориентированный на масштабируемость и производительность."];
        place = "Живу в Москве, Россия";
        work = 'исследуйте работу';
    }

    React.useEffect(() => {
        const isTouchDevice = () => (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
        if (isTouchDevice()) document.getElementById('about')!.classList.add('touch-screen');
    }, []);

    // Cursor Animation
    const textEnter = () => {
        props.setCursorVariant('text');
        props.setCursorOffset(20);
    }

    const textLeave = () => {
        props.setCursorVariant('default');
        props.setCursorOffset(6);
    }

    return (
        <section id="about" className="d-flex flex-column justify-content-center align-items-center">
            <span id="about__title" className='letter-wrap__word text-sm' >
                {title}
            </span>
            {/* <span id="about__about" data-aos="fade">
                I'm Mauro Polino. <span className="d-inline-block">A freelance</span> web developer oriented to scalability and user experience insight. <span className="d-inline-block">I am passionate</span> about software solutions for process optimization.</span> */}
            <span id="about__info" className="text-center" data-aos="fade">
                {about[0]}<br/>{about[1]}
            </span>
            <span id="about__place" data-aos="fade">{place}</span>
            <a className="text-btn text-sm" data-aos="fade" href="#portfolio"
                onMouseEnter={textEnter} onMouseLeave={textLeave} >
                <LetterWrap word={work} section={'hero'}/>
            </a>
        </section>
    )
}

export default About;