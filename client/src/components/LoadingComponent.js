import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Loading(){
    return(
        <Container>
            <Row className='text-center'>
                <Col>
                    <span style={{color: '#00bfe1'}} className="fa fa-spinner fa-pulse fa-3x fa-fw"></span>
                </Col>
            </Row>
        </Container>
    );
};

export default Loading;