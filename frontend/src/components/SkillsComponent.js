import { Container, Row, Col } from "reactstrap";

function RenderLevel(l) {
    const level = l.level;
    const maxLevel = 5;
    let indicators = [];
    let levelStr = '';

    for (let i = 0; i < level; i++) {
        indicators.push(
            <i key={i} className="fa fa-circle mx-1 color-secondary"></i>
        )
    }
    for (let i = 0; i < (maxLevel - level); i++) {
        indicators.push(
            <i key={maxLevel+i} className="fa fa-circle-thin mx-1 color-secondary"></i>
        )
    }

    if (level === 5) {
        levelStr = 'ADVANCED';
    } else if (level === 4) {
        levelStr = 'INTERMEDIATE +';
    } else {
        levelStr = 'INTERMEDIATE';
    }

    return(
        <section>
            {indicators}
            <h6 className="color-secondary mt-1">{levelStr}</h6>
        </section>
    );
}

function RenderCodingLanguages() {
    const languages = [
        { name: 'HTML5', level: 5 },
        { name: 'CSS3/SCSS', level: 5 },
        { name: 'JavaScript ES6', level: 4 },
        { name: 'Python 3', level: 4 },
        { name: 'C/C++', level: 4 },
        { name: 'SQL', level: 3 },
        { name: 'Java/Kotlin', level: 3 },
        { name: 'Swift', level: 3 },
    ]

    return(
        <Row className="text-center">
            {
                languages.map((language) => {
                    return(
                        <Col xs='6' lg='4' key={language.name} className='my-3'>
                            <h5 className="mb-1">{language.name}</h5>
                            <RenderLevel level={language.level} />
                        </Col>
                    );
                })
            }
        </Row>
    );
}

function Skills(props) {
    return(
        <Container id="skills" className="d-flex-gapped">
            <h2 ref={props.inputRef}><strong>Skills</strong></h2>
            
            <Container className="my-3">
                <div className="d-flex align-items-center">
                    <h3 className="me-3">
                        <small className="me-1"><i className="fa fa-language"></i></small>
                        Languages
                    </h3>
                    <div className="divider"></div>
                </div>

                <Row className="text-center mt-3">
                    <Col>
                        <h6 className="color-secondary">NATIVE</h6>
                        <h4>Spanish</h4>
                    </Col>
                    <Col>
                        <h6 className="color-secondary">ADVANCED</h6>
                        <h4>English</h4>
                    </Col>
                    <Col>
                        <h6 className="color-secondary">INTERMEDIATE</h6>
                        <h4>Russian</h4>
                    </Col>
                </Row>

            </Container>

            <Container className="my-3">
                <div className="d-flex align-items-center">
                    <h3 className="me-3">
                        <small className="me-1"><i className="fa fa-code"></i></small>
                        Coding
                    </h3>
                    <div className="divider"></div>
                </div>

                <RenderCodingLanguages />
            </Container>

            <Container className="mt-3">
                <div className="d-flex align-items-center">
                    <h3 className="me-3">
                        <small className="me-1"><i className="fa fa-lightbulb-o"></i></small>
                        Knowledge
                    </h3>
                    <div className="divider"></div>
                </div>

                <Row className="text-center mt-3">
                    <Col>
                        <h6 className="color-secondary">FRAMEWORKS</h6>
                        <h5>Bootstrap</h5>
                        <h5>React</h5>
                        <h5>NodeJS</h5>
                        <h5>Redux</h5>
                        <h5>Django</h5>
                        <h5>OpenCV</h5>
                    </Col>

                    <Col>
                        <h6 className="color-secondary">TOOLS & IDEs</h6>
                        <h5>Git</h5>
                        <h5>Xcode</h5>
                        <h5>Android Studio</h5>
                        <h5>MATLAB</h5>
                    </Col>

                    <Col className="d-none d-lg-block">
                        <h6 className="color-secondary">EMBEDDED SYSTEMS</h6>
                        <h5>MPLAB X</h5>
                        <h5>Atmel Studio</h5>
                        <h5>KiCad</h5>
                        <h5>Multisim</h5>
                        <h5>Proteus</h5>
                    </Col>
                </Row>

            </Container>
        </Container>
    );
}

export default Skills;