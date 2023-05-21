import React from "react";
import LetterWrap from "./LetterWrapComponent";

function About (props) {
    if (props.language === 'en') {
        var title = "about me";
        var about = "I'm Mauro Polino. A freelance web developer, oriented to scalability and user experience insight. I am passionate about software solutions for process automation.";
        var place = "Currently living in Moscow, Russia";
        var work = 'explore work';
    } else {
        title = "обо мне";
        about = "Я Мауро Полино. Веб-разработчик-фрилансер, ориентированный на масштабируемость. Я увлечен программными решениями для автоматизации.";
        place = "В настоящее время живу в Москве, Россия";
        work = 'исследуйте работу';
    }

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
            <span id="about__title" className='letter-wrap__word' >
                {title}
            </span>
            {/* <span id="about__about" data-aos="fade">
                I'm Mauro Polino. <span className="d-inline-block">A freelance</span> web developer oriented to scalability and user experience insight. <span className="d-inline-block">I am passionate</span> about software solutions for process optimization.</span> */}
            <span id="about__info" data-aos="fade">{about}</span>
            <span id="about__place" data-aos="fade">{place}</span>
            {/* <div className="letter-wrap__button" data-aos="fade" onClick={() => handleClick(props.portfolioRef)}
                onMouseEnter={textEnter} onMouseLeave={textLeave} >
                <LetterWrap word={work} section={'hero'}/>
            </div> */}
            <a className="letter-wrap__button" data-aos="fade" href="#portfolio"
                onMouseEnter={textEnter} onMouseLeave={textLeave} >
                <LetterWrap word={work} section={'hero'}/>
            </a>
        </section>
    )
}

export default About;