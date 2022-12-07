import { Container } from "reactstrap";
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

function Education(props) {
    if (!props.bachelor) {
        <Loading />
    }   
    else {
        return(
            <Container id="education" className="d-flex-gapped">
                <h2><strong>Education</strong></h2>

                <div className="d-flex">
                    <h4 className="me-2">BSc Electronics Engineering</h4>

                    <a className="link-colored-secondary" href={baseUrl + props.bachelor.source} target="_blank" rel="noopener noreferrer">
                        <h4><small><i className="fa fa-link fa-lg"></i></small></h4>
                    </a>
                </div>

                <h4 className="color-secondary">University of Engineering and Technology (UTEC)</h4>

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
            </Container>
        );
    }
}

export default Education;