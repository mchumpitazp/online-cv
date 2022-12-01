import { Container } from "reactstrap";

function Records() {
    return(
        <Container id="records" className="d-flex-gapped">
            <h2><strong>Records</strong></h2>

            <a className="link-colored-secondary" href="https://www.coursera.org/account/accomplishments/specialization/DP54KCJ5LSCB" target="_blank" rel="noopener noreferrer">
                <h4>
                    <small className='me-2'><i className="fa fa-link fa-lg"></i></small>
                    Full-Stack Web Development with React by HKUST
                </h4>
            </a>

            <a className="link-colored-secondary" href="" target="_blank" rel="noopener noreferrer">
                <h4>
                    <small className='me-2'><i className="fa fa-link fa-lg"></i></small>
                    Web Programming with Python and Javascript by Harvard
                </h4>
            </a>

            <a className="link-colored-secondary" href="https://www.credly.com/badges/6661a80c-878c-45af-8a41-bbb50f94a837" target="_blank" rel="noopener noreferrer">
                <h4>
                    <small className='me-2'><i className="fa fa-link fa-lg"></i></small>
                    Python for Data Science by IBM
                </h4>
            </a>

            <a className="link-colored-secondary" href="https://courses.cognitiveclass.ai/certificates/ff9dc540df0f48d0b7fbb476de31486c" target="_blank" rel="noopener noreferrer">
                <h4>
                    <small className='me-2'><i className="fa fa-link fa-lg"></i></small>
                    SQL and Relational Databases 101 by IBM
                </h4>
            </a>

            <a className="link-colored-secondary" href="" target="_blank" rel="noopener noreferrer">
                <h4>
                    <small className='me-2'><i className="fa fa-link fa-lg"></i></small>
                    Mentor in Productivity Workshop
                </h4>
            </a>
        </Container>
    );
}

export default Records;