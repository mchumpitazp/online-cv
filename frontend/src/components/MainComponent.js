import React from 'react';

// Components
import Intro from './IntroComponent';
import Header from './HeaderComponent';
import Headline from './HeadlineComponent';
import Education from './EducationComponent';
import Portfolio from './PortfolioComponent';
import Skills from './SkillsComponent';
import Experience from './ExperienceComponent';
import Records from './RecordsComponent';
import Footer from './FooterComponent';

// Redux
import { connect } from 'react-redux';
import { fetchProjects } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        projects: state.projects
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchProjects: () => {dispatch(fetchProjects())}
});

class Main extends React.Component {

    constructor() {
        super();
        this.state = { renderIntro: false };
    }

    componentDidMount() {
        this.props.fetchProjects();
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
                    <Portfolio  projects={this.props.projects}/>
                    <Skills />
                    <Experience />
                    <Records />
                    <Footer />
                </React.Fragment>
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);