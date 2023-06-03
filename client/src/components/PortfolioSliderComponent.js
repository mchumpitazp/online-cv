import React from "react";
import { baseUrl } from '../shared/baseUrl';

function PortfolioSlider (props) {
    const NUM_PROJECTS = 4;
    const portfolioRef = React.useRef(null);
    const trackRef = React.useRef(null);
    const listRef = React.useRef(null);

    // Scrolling stuff
    React.useEffect(() => {
        trackRef.current.style.height = (NUM_PROJECTS * 100) + "vw";

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollTop = portfolioRef.current.offsetTop;
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            const offset = (scrollY - scrollTop) * 0.8;
            const scrollX = (vw * 0.93) * (NUM_PROJECTS - 1);

            if (scrollY >= scrollTop && offset < scrollX) {
                listRef.current.style.transform = `translate3d(-${offset}px, 0px, 0px)`
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
            <div className="portfolio-slider__projects-item" key={project.name} >
                <a href={project.url} onMouseEnter={projectEnter} onMouseLeave={projectLeave} target="_blank" rel="noopener noreferrer">
                    <div className='portfolio-slider__projects-item__text d-flex justify-content-between align-items-end'>
                        <span className='portfolio-slider__projects-item__text-title'>{project.name}</span>
                        <div className="d-flex flex-column gap-2">
                            <span className="text-tag">responsive</span>
                            <span className="text-tag">scalable</span>
                        </div>
                    </div>
                    <img className='portfolio-slider__projects-item__img'
                        src={baseUrl + project.image}
                        alt={project.name}/>
                    {/* <img className='portfolio__projects-img d-none d-sm-block d-xl-none'
                        src={baseUrl + getTabletImage(project.image)}
                        alt={project.name}/>
                    <img className='portfolio__projects-img d-block d-sm-none'
                        src={baseUrl + getMobileImage(project.image)}
                        alt={project.name}/> */}
                </a>
            </div>
        );
    });

    return (
        <section id="portfolio" ref={portfolioRef}>
            <div id="portfolio-slider__vertical" ref={trackRef}>
                <div id="portfolio-slider__horizontal">
                    <div id="portfolio-slider__projects" role="list" ref={listRef}>
                        {projects}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortfolioSlider;