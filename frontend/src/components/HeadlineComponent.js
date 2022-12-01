import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import ModalContact from './ModalContactComponent';

function Headline() {
    const subtitleRef = React.useRef(null);
    const [isModalOpen, openModal] = React.useState(false);

    React.useEffect(() => {   
        async function subtitleAnimation(i) {
            let professions = ['SOFTWARE DEVELOPER', 'PROGRAMMER', 'ELECTRONICS ENGINEER'];
            const profession = professions[i];

            while (subtitleRef.current.innerHTML !== "") {
                await new Promise((resolve) => setTimeout(() => {
                    subtitleRef.current.innerHTML = subtitleRef.current.innerHTML.replace(/.$/, '');
                    resolve();
                }, 70));
            }
        
            for (let k = 0; k < profession.length; k++) {
                await new Promise((resolve) => setTimeout(() => {
                    subtitleRef.current.innerHTML += profession.charAt(k);
                    resolve();
                }, 70));
            }
        
            await new Promise((resolve) => setTimeout(() => resolve(), 700));
    
            return subtitleAnimation((i < 2) ? i + 1 : 0);
        }

        setTimeout(() => subtitleAnimation(1), 800);
    }, []);

    return(
        <React.Fragment>        
            <Container id='headline'>
                <Row>
                    <Col lg id='headline-content'>
                        <h1>Mauro Polino</h1>
                        
                        <div id='subtitle' className='d-flex'>
                            <span ref={subtitleRef} id="subtitle-text">SOFTWARE DEVELOPER</span>
                            <span>|</span>
                        </div>
                        
                        <p className='mt-3'>
                            I am an electronics and software engineer specialized in Digital and Computational Systems and Web Development. My interests are programming languages applied to research or development, digital transformation and innovation, in addition, projects with a positive impact on the environment. My favorite field is web development where I am comfortable being full-stack, but a bit more pleasant with frontend. My hobbies are sports and continuous learning of programming languages.
                        </p>

                        <Button onClick={() => openModal(true)} color='light' outline className='my-4 px-5 py-3'>
                            <h5 className='m-0'>
                                Contact Me
                                <small className='ms-1'><i className='fa fa-chevron-right'></i></small>
                            </h5>
                        </Button>
                    </Col>
                    
                    <Col lg id='headline-portrait-container'>
                        <img src='assets/images/portrait.png' alt='Portrait'/>
                    </Col>
                </Row>
                
            </Container>

            <ModalContact isOpen={isModalOpen} toggle={() => openModal(false)} />
        </React.Fragment>
    );
}

export default Headline;