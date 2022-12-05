import React from 'react';
import { Container, Row, Col, FormGroup, Input, Label } from "reactstrap";
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';
import ModalProject from './ModalProjectComponent';

function Portfolio(props) {
    const [switchChecked, setSwitch] = React.useState(true);
    const [currProject, setProject] = React.useState(null);
    const [isModalOpen, setModal] = React.useState(false);

    function projectScaleUp(e, action) {
        const project = e.target.closest('.portfolio-child');
        if (project.classList.contains('scaleup-container')) {
            project.style.animationName = action + '-padding';
            project.style.animationPlayState = 'running';
        }
    }

    function toggleModal(project) {
        setModal(!isModalOpen);
        setProject(project);
    }

    if (props.projects.isLoading) {
        return( <Loading /> );
    } 
    else if (props.projects.errMess) {
        return(
            <Container>
                <h4>{props.projects.errMess}</h4>
            </Container>
        );
    }
    else {
        props.projects.projects.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        })

        const projects = props.projects.projects.map((project) => {
            return(
                <Col className={'portfolio-child mt-3 ' + 
                                (switchChecked? 'scaleup-container' : 'scaleup-img')}
                    key={project.id}
                    xs='12' lg='6'
                    onMouseEnter={(e) => projectScaleUp(e, 'minus')}
                    onMouseLeave={(e) => projectScaleUp(e, 'plus')}
                    onClick={() => toggleModal(project)}>

                    <div className='project-img-container'>
                        <img className='project-img'
                            src={baseUrl + project.images[0]}
                            alt={project.name}/>
                    </div>
                    <h6 className='project-category'>{project.category}</h6>
                    <h3 className='project-name'><strong>{project.name}</strong></h3>
                </Col>
            );
        });

        return(
            <Container id='portfolio' className='d-flex-gapped'>
                <div className='d-flex align-items-center'>
                    <h2 className='me-3'><strong>Portfolio</strong></h2>

                    <FormGroup switch>
                        <Input type='switch' role='switch' defaultChecked
                                onClick={() => {setSwitch(!switchChecked)}}/>
                        <Label check><small>Scale up</small></Label>
                    </FormGroup>
                </div>
                
                <Row className='text-center'>
                    {projects}
                </Row>

                <ModalProject isOpen={isModalOpen} 
                        toggle={() => toggleModal(null)}
                        project={currProject}/>
            </Container>
    
        );
    }
}

export default Portfolio;