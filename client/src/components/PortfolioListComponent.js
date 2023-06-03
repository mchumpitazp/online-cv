import React from "react";
import { baseUrl } from '../shared/baseUrl';
import $ from 'jquery';
import Expander from "./ExpanderComponent";

function Portfolio (props) {

    // Get projects
    const projectsSorted = [...props.projects.projects];

    projectsSorted.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    // Get logo image
    const getLogoImage = (image) => (image.slice(0, -4) + (props.darkMode ? '-black' : '-white') + "-logo.png");
    const getTabletImage = (image) => (image.slice(0, -4) + "-tablet.jpg");

    const handleToggler = (e) => {
        const item = e.target.parentNode;
        if (item.classList.contains('expanded')) {
            //item.classList.remove('expanded');
            $(item).find('.expander').trigger('click', {isExpanded: true, parent: item});
        } else {
            //$('.portfolio-list__projects-item').removeClass('expanded');
            setTimeout(() => item.classList.add('expanded'), 300); 
            $(item).find('.expander').trigger('click', {isExpanded: false, parent: item});
        }
    }   

    const projects = projectsSorted.map(project => {
        return(
            <div className="portfolio-list__projects-item" key={project.name}>
                <div className="portfolio-list__projects-item__toggler"
                    onClick={e => handleToggler(e)} data-aos="fade">
                    <div className="portfolio-list__projects-item__toggler-info">
                        <img className="portfolio-list__projects-item__toggler-info__img"
                            src={baseUrl + getLogoImage(project.image)}  alt={project.image}/>
                        <div className="d-flex flex-column gap-2">
                            <span className="portfolio-list__projects-item__toggler-info__title">
                                {project.name}
                            </span>
                            <div className="portfolio-list__projects-item__toggler-info__tags d-none d-sm-block">
                                <span className="text-tag">responsive</span>
                                <span className="text-tag ms-3">scalable</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className="portfolio-list__projects-item__expander">
                        <Expander />
                    </div>
                </div>
                <a className="portfolio-list__projects-item__nav"  href={project.url} target="_blank" rel="noopener noreferrer">
                    <div className="portfolio-list__projects-item__nav-text">
                        <span className="portfolio-list__projects-item__nav-text__title">{project.name}</span>
                        <span className="portfolio-list__projects-item__nav-text__button">view case</span>
                    </div>
                    <img className="portfolio-list__projects-item__nav-img"
                        src={baseUrl + getTabletImage(project.image)}
                        alt={project.name}/>
                </a>
            </div>
        );
    });

    return (
        <section id="portfolio">
            <div id="portfolio-list" role="list">
                {projects}
            </div>
        </section>
    );
}

export default Portfolio;