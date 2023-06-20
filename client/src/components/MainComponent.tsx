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
import Background from './BackgroundComponent';
import Footer from './FooterComponent';

// Redux
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { fetchProjects } from '../redux/ActionCreators';
// import { fetchProjects, fetchFiles } from '../redux/ActionCreators';

function Main () {
    // Redux
    const dispatch = useAppDispatch();
    const projects = useAppSelector((state: { projects: any; }) => state.projects);
    //const files = useSelector(state => state.files);

    // States
    const [cursorVariant, setCursorVariant] = React.useState('default');
    const [cursorText, setCursorText] = React.useState('');
    const [cursorOffset, setCursorOffset] = React.useState(6);
    const [language, setLanguage] = React.useState('en');
    const [renderIntro, setRenderIntro] = React.useState(true);
    const [darkMode, setDarkMode] = React.useState(false);

    // Cursor dependency
    const isTouchDevice = () => (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));

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
            <>
                {   
                    !isTouchDevice() && 
                    <Cursor cursorVariant={cursorVariant}
                            cursorText={cursorText}
                            cursorOffset={cursorOffset}
                            darkMode={darkMode} />
                }
                <Header language={language}
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
                <Background language={language}
                            setCursorVariant={setCursorVariant}
                            setCursorOffset={setCursorOffset} />
                <Footer language={language}
                        setCursorVariant={setCursorVariant}
                        setCursorText={setCursorText}
                        setCursorOffset={setCursorOffset} />
            </>
        )
    }
}

export default Main;