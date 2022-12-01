import React from 'react';
import Intro from './IntroComponent';
import Header from './HeaderComponent';
import Headline from './HeadlineComponent';
import Education from './EducationComponent';
import Portfolio from './PortfolioComponent';
import Skills from './SkillsComponent';
import Experience from './ExperienceComponent';
import Records from './RecordsComponent';
import Footer from './FooterComponent';

class Main extends React.Component {

    constructor() {
        super();
        this.state = { renderIntro: false };
    }

    render() {
        
        if (this.state.renderIntro) {
            return (
                <Intro unmount={() => this.setState({renderIntro: false})} /> 
            )
        } else {
            document.getElementById('root').style.overflowY = 'auto';

            return (
                <React.Fragment>
                    <Header />
                    <Headline/>
                    <Education />
                    <Portfolio />
                    <Skills />
                    <Experience />
                    <Records />
                    <Footer />
                </React.Fragment>
            )
        }
    }
}

export default Main;