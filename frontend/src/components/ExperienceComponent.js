import { Container } from "reactstrap";
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

function Experience(props) {
    if (!props.letter) {
        <Loading />
    }
    else {
        return(
            <Container id="experience" className="d-flex-gapped">
                <h2 ref={props.inputRef}><strong>Experience</strong></h2>
    
                <h4>
                    <small className="me-2"><i className="fa fa-user"></i></small> 
                    Technology Developer
                </h4>
    
                <h4 className="color-secondary">
                    <small className="me-2"><i className="fa fa-briefcase"></i></small> 
                    Water Research and Technology Center - CITA
                </h4>
    
                <a className="link-colored-secondary" href={baseUrl + props.letter.source} target="_blank" rel="noopener noreferrer">
                    <h5>
                        <small className="me-2"><i className="fa fa-link"></i></small> 
                        Recomendation Letter
                    </h5>
                </a>
            </Container>
        );
    }
}

export default Experience;