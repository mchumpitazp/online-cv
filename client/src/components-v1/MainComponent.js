import React from 'react';

// Components
import Intro from './IntroComponent';
import Header from './HeaderComponent';
import Headline from './HeadlineComponent';
import Education from './EducationComponent';
import Pro from './ProComponent';
import Portfolio from './PortfolioComponent';
import Skills from './SkillsComponent';
import Experience from './ExperienceComponent';
import Records from './RecordsComponent';
import Footer from './FooterComponent';

// Redux
import { connect } from 'react-redux';
import { fetchProjects, fetchFiles } from '../redux/ActionCreators';
import Head from './HeadComponent';

const mapStateToProps = state => {
    return {
        projects: state.projects,
        files: state.files
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchProjects: () => {dispatch(fetchProjects())},
    fetchFiles: () => {dispatch(fetchFiles())}
});

class Main extends React.Component {

    portfolioRef = React.createRef();
    skillsRef = React.createRef();
    experienceRef = React.createRef();
    recordsRef = React.createRef();

    constructor() {
        super();
        this.state = { renderIntro: false };
    }

    componentDidMount() {
        this.props.fetchProjects();
        this.props.fetchFiles();
    }

    render() {
        if (this.state.renderIntro) {
            return (
                <Intro unmount={() => this.setState({renderIntro: false})} /> 
            )
        } else {
            return (
                <React.Fragment>
                    <Header portfolioRef={this.portfolioRef}
                            skillsRef={this.skillsRef}
                            experienceRef={this.experienceRef}
                            recordsRef={this.recordsRef} />
                    <Head />
                    <Headline/>
                    <Education/>
                    <Pro projects={this.props.projects} />
                    <Portfolio projects={this.props.projects}
                                inputRef={this.portfolioRef}/>
                    <Skills inputRef={this.skillsRef}/>
                    <Experience letter={this.props.files.files.find((file) => file.name === 'cita-letter')} 
                                inputRef={this.experienceRef}/>
                    <Records records={this.props.files.files.filter((file) => file.record === true)}
                             inputRef={this.recordsRef} />
                    <Footer />
                </React.Fragment>
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);