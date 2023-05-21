import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import ModalContact from './ModalContactComponent';

function Headline() {
    const subtitleRef = React.useRef(null);
    const [isModalOpen, openModal] = React.useState(false);

    React.useEffect(() => {   
        async function subtitleAnimation(i) {
            let professions = ['WEB DEVELOPER', 'PROGRAMMER', 'ELECTRONICS ENGINEER'];
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
                            <span ref={subtitleRef} id="subtitle-text">WEB DEVELOPER</span>
                            <span id='subtitle-slash'>|</span>
                        </div>
                        
                        <p className='mt-3'>
                        I am an electronics engineer and computer science enthusiast specialized in web development. In the past,
                        I excelled in computer science courses for personal enjoyment and worked in a tech company, developing
                        hardware and software solutions for mid and large scale projects. This learning journey motivated me to
                        become a certified full-stack web developer with HTML5, CSS3, Django, MongoDB, Express, React and Node (MERN stack).
                        On top of that, my major field is front-end with React, Redux and Bootstrap
                            <i className='fa fa-smile-o p-1'></i>
                            .
                        </p>

                        <Button onClick={() => openModal(true)} color='light' outline className='my-4 px-5 py-3'>
                            <h5 className='m-0'>
                                Contact Me
                                <small className='ms-1'><i className='fa fa-chevron-right'></i></small>
                            </h5>
                        </Button>
                    </Col>
                    
                    <Col lg id='headline-portrait-container'>
                        <img src={baseUrl + '/images/portrait.png'} alt='Portrait'/>
                    </Col>
                </Row>
                
            </Container>

            <ModalContact isOpen={isModalOpen} toggle={() => openModal(false)} />
        </React.Fragment>
    );
}

export default Headline;