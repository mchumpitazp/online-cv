import React from "react";
import { baseUrl } from '../shared/baseUrl';

function Portfolio (props) {
    const NUM_PROJECTS = 3;
    const portfolioRef = React.useRef(null);
    const trackRef = React.useRef(null);
    const listRef = React.useRef(null);

    // Scrolling stuff
    React.useEffect(() => {
        // Brute force of handling Track
        // const handleTrack = () => {
        //     if (window.innerWidth < 576) {
        //         trackRef.current.style.height = (NUM_PROJECTS * 120) + "vw";
        //     } else if (window.innerWidth < 992) {
        //         trackRef.current.style.height = (NUM_PROJECTS * 100) + "vw";
        //     } else {
        //         trackRef.current.style.height = (NUM_PROJECTS * 80) + "vw";
        //     }
        // }
        // handleTrack();

        // When scrolling Track
        trackRef.current.style.height = (NUM_PROJECTS * 100) + "vw";

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollTop = portfolioRef.current.offsetTop;
            console.log(scrollY + " " + scrollTop);
            const vw = 0.01 * Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            const scrollX = (vw * 0.93) * (NUM_PROJECTS - 1);
            const val = scrollY - scrollTop;
            console.log(val);

            if (scrollY >= scrollTop && val < scrollX) {
                listRef.current.style.transform = `translate3d(-${val}px, 0px, 0px)`
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Cursor variant
    const projectEnter = () => {
        props.setCursorVariant('project');
        props.setCursorText('SEE CASE');
        props.setCursorOffset(77);
    }
    const projectLeave = () => {
        props.setCursorVariant('default');
        props.setCursorText('');
        props.setCursorOffset(6);
    }

    // Get projects
    const projectsSorted = [...props.projects.projects];

    projectsSorted.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    // Get mobile image
    const getMobileImage = (image) => (image.slice(0, -4) + "-mobile" + image.slice(-4));
    const getTabletImage = (image) => (image.slice(0, -4) + "-tablet" + image.slice(-4));

    const projects = projectsSorted.map(project => {
        return(
            <div className="portfolio__projects-item" key={project.name} >
                <a href={project.url} onMouseEnter={projectEnter} onMouseLeave={projectLeave} target="_blank" rel="noopener noreferrer">
                    <img className='portfolio__projects-img d-none d-xl-block'
                        src={baseUrl + project.image}
                        alt={project.name}/>
                    <img className='portfolio__projects-img d-none d-sm-block d-xl-none'
                        src={baseUrl + getTabletImage(project.image)}
                        alt={project.name}/>
                    <img className='portfolio__projects-img d-block d-sm-none'
                        src={baseUrl + getMobileImage(project.image)}
                        alt={project.name}/>
                </a>
            </div>
        );
    });

    return (
        <section id="portfolio" ref={portfolioRef}>
            <div id="portfolio__vertical" ref={trackRef}>
                <div id="portfolio__horizontal">
                    <div id="portfolio__projects" role="list" ref={listRef}>
                        {projects}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;