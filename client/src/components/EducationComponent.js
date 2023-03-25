import { Container, Row } from "reactstrap";
import { baseUrl } from '../shared/baseUrl';

function Education(props) {
    return(
        <Container id="education" className="d-flex-gapped">
            <h2><strong>Education</strong></h2>

            <Row>
                <h4 className="color-secondary">University of Engineering and Technology - UTEC</h4>

                <div className="d-flex">
                    <h4 className="me-2">BSc Electronics Engineering</h4>

                    <a className="link-colored-secondary" href={`${baseUrl}/files/bachelor.pdf`} target="_blank" rel="noopener noreferrer">
                        <h4><small><i className="fa fa-link fa-lg"></i></small></h4>
                    </a>
                </div>

                <h5>Computer Science elective courses: Cloud computing, Machine learning, Digital image processing and Algorithms and data structures.</h5>

                <div className="d-flex">
                    <h5 className="me-3">
                        <i className="fa fa-calendar"></i>
                        <small className="ms-1">2015 - 2021</small>
                    </h5>

                    <h5 className="ms-3">
                        <i className="fa fa-map-marker"></i>
                        <small className="ms-1">Lima, Peru</small>
                    </h5>
                </div>
            </Row>
            
            <Row>
                <h4 className="color-secondary mt-2">Harvard University</h4>

                <div className="d-flex">
                    <h4 className="me-2">Certified in Web Programming with Python and JavaScript</h4>

                    <a className="link-colored-secondary" href="https://certificates.cs50.io/33d96b3c-d62b-4a87-a4cd-7806928a2c55.pdf?size=letter" target="_blank" rel="noopener noreferrer">
                        <h4><small><i className="fa fa-link fa-lg"></i></small></h4>
                    </a>
                </div>

                <div className="d-flex">
                    <h5 className="me-3">
                        <i className="fa fa-calendar"></i>
                        <small className="ms-1">Mar - Aug 2022</small>
                    </h5>

                    <h5 className="ms-3">
                        <i className="fa fa-map-marker"></i>
                        <small className="ms-1">Online</small>
                    </h5>
                </div>
            </Row>
            
            <Row>
                <h4 className="color-secondary mt-2">The Hong Kong University of Science and Technology</h4>

                <div className="d-flex">
                    <h4 className="me-2">Certified in Full-Stack Web Development with React</h4>

                    <a className="link-colored-secondary" href="https://www.coursera.org/account/accomplishments/specialization/DP54KCJ5LSCB" target="_blank" rel="noopener noreferrer">
                        <h4><small><i className="fa fa-link fa-lg"></i></small></h4>
                    </a>
                </div>

                <div className="d-flex">
                    <h5 className="me-3">
                        <i className="fa fa-calendar"></i>
                        <small className="ms-1">Sep - Nov 2022</small>
                    </h5>

                    <h5 className="ms-3">
                        <i className="fa fa-map-marker"></i>
                        <small className="ms-1">Online</small>
                    </h5>
                </div>
            </Row>

        </Container>
    );
}

export default Education;