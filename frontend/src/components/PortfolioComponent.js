import React from 'react';
import { Container, FormGroup, Input, Label } from "reactstrap";
import ModalPortfolio from './ModalPortfolioComponent';

function Portfolio() {
    const [switchChecked, setSwitch] = React.useState(true);

    return(
        <React.Fragment>
            <Container id='portfolio' className='d-flex-gapped'>
                <div className='d-flex align-items-center'>
                    <h2 className='me-3'><strong>Portfolio</strong></h2>

                    <FormGroup switch>
                        <Input type='switch' role='switch'
                                checked={switchChecked}
                                onClick={() => {setSwitch(!switchChecked)}}/>
                        <Label check><small>Scale up</small></Label>
                    </FormGroup>
                </div>
                
                <Container id='portfolio-parent'>
                    
                </Container>
            </Container>

            <ModalPortfolio />
        </React.Fragment>
    );
}

export default Portfolio;