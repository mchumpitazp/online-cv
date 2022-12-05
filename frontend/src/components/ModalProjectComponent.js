import React from 'react';
import { Modal, ModalBody, ModalHeader, Container } from 'reactstrap';
import CarouselProject from './CarouselProjectComponent';
import TooltipProject from './TooltipProjectComponent';

function ModalProject(props) {
    if (props.project) {
        
        const tools = []
        props.project.tools.map((tool, index) => {
            let deviconSufix = '';

            if (tool.includes('-o')) {
                deviconSufix = "-original"
                tool = tool.replace('-o', '');
            } else {
                deviconSufix = "-plain"
            }

            tools.push(
                <i key={index} id={`i-${tool}`} 
                    className={'devicon-' + tool + deviconSufix} >
                    <TooltipProject tool={tool}/>
                </i> 
            )
        })

        return(
            <Modal id='modal-project' centered isOpen={props.isOpen} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}></ModalHeader>
                <ModalBody className='px-0 py-1'>
                    <CarouselProject project={props.project} />
                    <Container>
                        <div className='body-top mt-2'>
                            <div> 
                                <h6 className='project-category'>{props.project.category}</h6>
                                <h4 className='project-name'>{props.project.name}</h4>
                            </div>

                            <div className='tools'>
                                {tools}
                            </div>
                        </div>

                        <p>
                            {props.project.description}
                        </p>                        
                        
                        <div className='body-bottom mb-2'>
                            <a href={props.project.source} className="btn btn-outline-dark btn-sm px-4 py-2" target="_blank" rel="noopener noreferrer">
                                <h6 className='m-0'>
                                    Source code
                                    <i className="fa fa-external-link fa-lg ms-2"></i>
                                </h6>
                            </a>
                            <h6 className='m-0'>{new Date(props.project.date).getFullYear()}</h6>
                        </div>
                    </Container>
                </ModalBody>
            </Modal>
        );
    }
    
};

export default ModalProject;