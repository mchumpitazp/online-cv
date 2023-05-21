import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Intro from './IntroComponent';
import Cursor from './CursorComponent';
import Header from './HeaderComponent';
import Hero from './HeroComponent';
import About from './AboutComponent';
import Portfolio from './PortfolioComponent';
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
    const [renderIntro, setRenderIntro] = React.useState(true);

    // Section References
    const skillsRef = React.useRef();
    const experienceRef = React.useRef();
    const recordsRef = React.useRef();

    React.useEffect(() => {
        dispatch(fetchProjects());
        //dispatch(fetchFiles());
        AOS.init({
            once: false,
            mirror: true
        });
        AOS.refresh();

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
                <Cursor cursorVariant={cursorVariant}
                        cursorText={cursorText}
                        cursorOffset={cursorOffset} />
                <Header skillsRef={skillsRef}
                        experienceRef={experienceRef}
                        recordsRef={recordsRef}
                        language={language}
                        setCursorVariant={setCursorVariant}
                        setCursorOffset={setCursorOffset} />
                <Hero language={language} setLanguage={setLanguage} />
                <About language={language} setLanguage={setLanguage}
                        setCursorVariant={setCursorVariant}
                        setCursorOffset={setCursorOffset} />
                <Portfolio projects={projects}
                        setLanguage={setLanguage}
                        setCursorVariant={setCursorVariant}
                        setCursorText={setCursorText}
                        setCursorOffset={setCursorOffset} />
                <Footer language={language}
                        setCursorVariant={setCursorVariant}
                        setCursorText={setCursorText}
                        setCursorOffset={setCursorOffset} />
            </React.Fragment>
        )
    }
}

export default Main;