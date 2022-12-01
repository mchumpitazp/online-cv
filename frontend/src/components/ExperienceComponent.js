import { Container } from "reactstrap";

function Experience() {
    return(
        <Container id="experience" className="d-flex-gapped">
            <h2><strong>Experience</strong></h2>

            <h4>
                <small className="me-2"><i className="fa fa-user"></i></small> 
                Technology Developer
            </h4>

            <h4 className="color-secondary">
                <small className="me-2"><i className="fa fa-briefcase"></i></small> 
                Water Research and Technology Center - CITA
            </h4>

            <a className="link-colored-secondary" href='#' target="_blank" rel="noopener noreferrer">
                <h5>
                    <small className="me-2"><i className="fa fa-link"></i></small> 
                    Recomendation Letter
                </h5>
            </a>
        </Container>
    );
}

export default Experience;