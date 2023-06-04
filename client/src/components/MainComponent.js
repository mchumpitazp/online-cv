import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import $ from 'jquery';

// Components
import Intro from './IntroComponent';
import Cursor from './CursorComponent';
import Header from './HeaderComponent';
import Hero from './HeroComponent';
import About from './AboutComponent';
import PortfolioSlider from './PortfolioSliderComponent';
import PortfolioList from './PortfolioListComponent';
import Footer from './FooterComponent';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects, fetchFiles } from '../redux/ActionCreators';

function Main () {
    // Redux
    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects);
    //const files = useSelector(state => state.files);

    // States
    const [cursorVariant, setCursorVariant] = React.useState('default');
    const [cursorText, setCursorText] = React.useState('');
    const [cursorOffset, setCursorOffset] = React.useState(6);
    const [language, setLanguage] = React.useState('en');
    const [renderIntro, setRenderIntro] = React.useState(false);
    const [darkMode, setDarkMode] = React.useState(false);

    // Section References
    const skillsRef = React.useRef();
    const experienceRef = React.useRef();
    const recordsRef = React.useRef();

    const isTouchDevice = () => (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));

    React.useEffect(() => {
        dispatch(fetchProjects());
        //dispatch(fetchFiles());
        AOS.init({
            once: false,
            mirror: true
        });
        AOS.refresh();

        // CSS
        if (isTouchDevice()) {
            $('.text-sm').addClass('touch-screen');
            $('.text-md').addClass('touch-screen');
            $('.text-nav').addClass('touch-screen');
            $('.text-btn').addClass('touch-screen');
            $('#hero').addClass('touch-screen');
            $('#about').addClass('touch-screen');
        }

        // Preload portrait
        const portrait = new Image();
        portrait.src = '/portrait.jpg';
    }, [dispatch]);

    if (renderIntro) {
        return (
            <Intro unmount={() => setRenderIntro(false)} /> 
        )
    } else {
        return (
            <React.Fragment>
                {   
                    !isTouchDevice() && 
                    <Cursor cursorVariant={cursorVariant}
                            cursorText={cursorText}
                            cursorOffset={cursorOffset}
                            darkMode={darkMode} />
                }
                <Header skillsRef={skillsRef}
                        experienceRef={experienceRef}
                        recordsRef={recordsRef}
                        language={language}
                        setCursorVariant={setCursorVariant}
                        setCursorOffset={setCursorOffset} />
                <Hero language={language} setLanguage={setLanguage}
                        setCursorVariant={setCursorVariant}
                        setCursorOffset={setCursorOffset}
                        darkMode={darkMode} setDarkMode={setDarkMode} />
                <About language={language} setLanguage={setLanguage}
                        setCursorVariant={setCursorVariant}
                        setCursorOffset={setCursorOffset} />
                {
                    isTouchDevice() ?
                    <PortfolioList projects={projects}
                        setLanguage={setLanguage}
                        setCursorVariant={setCursorVariant}
                        setCursorText={setCursorText}
                        setCursorOffset={setCursorOffset}
                        darkMode={darkMode} />
                    :
                    <PortfolioSlider projects={projects}
                        setLanguage={setLanguage}
                        setCursorVariant={setCursorVariant}
                        setCursorText={setCursorText}
                        setCursorOffset={setCursorOffset} />
                }
                <Footer language={language}
                        setCursorVariant={setCursorVariant}
                        setCursorText={setCursorText}
                        setCursorOffset={setCursorOffset} />
            </React.Fragment>
        )
    }
}

export default Main;