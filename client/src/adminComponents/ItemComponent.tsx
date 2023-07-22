import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { InputType } from 'reactstrap/types/lib/Input';
import { baseUrl } from '../shared/baseUrl';
import ItemModal from './ItemModalComponent';

interface ItemProps {
    data: any
}

function Item (props: ItemProps) {
    const [modal, setModal] = React.useState(false);
    const [color, setModalColor] = React.useState('success');

    const { item_title } = useParams();
    const { state } = useLocation();
    
    const solveInput = (input: string) => {
        let type: InputType;
        let placeholder: string;

        if (input.includes('http')) {
            type = 'url';
            placeholder = 'https://example.com';
        } else if (Date.parse(input)) {
            type = 'date';
            placeholder = 'DD.MM.YYYY';
        } else {
            type = 'text'; 
            placeholder = '';
        }

        return [type, placeholder] as const;
    }

    const renderFormGroups = ()  => {
        const myitemObj = props.data.data[item_title!]
                            ?.filter((obj: any) => obj._id === state.item_id)[0];
        const entries = Object.entries(myitemObj)
                            .filter(([key, _]) => key !== '_id' && key !== '__v');

        return entries.map((pair: any, i: number) => {
            const [inputType, placeholder] = solveInput(pair[1]);
    
            return (
                <FormGroup row key={i}>
                    <Label 
                        for={`input-${pair[0]}`}
                        sm={2} >
                        {pair[0]}
                    </Label>
                    <Col sm={10}>
                        <Input  id={`input-${pair[0]}`}
                                name={pair[0]}
                                defaultValue={pair[1]}
                                type={inputType}
                                placeholder={placeholder} >
                        </Input>
                    </Col>
                </FormGroup>
            )
        });
    }
    
    const submitForm = (formData: FormData) => {
        let newData: { [key: string]: any } = {};
        formData.forEach((value, key) => {
            newData[key] = value;
        });

        fetch(baseUrl + '/' + item_title + '/' + state.item_id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(() => {
            setModal(true);
            setModalColor('success');
        })
        .catch((error) => {
            console.log(error);
            setModalColor('danger');
          });
    }

    if (!props.data.isLoading) {
        return (
            <div className='admin'>
                <Link to='/admin' reloadDocument>
                    <Button className='m-4' color='secondary' outline>
                        <small>
                            <i className='fa fa-angle-left'></i>
                            &nbsp;
                            Back
                        </small>
                    </Button> 
                </Link>

                <Container id='item'>
                    <h4 id='item-title' className='admin-title'>{item_title} editor</h4>
                    <br />
                    <Form onSubmit={e => {e.preventDefault(); submitForm(new FormData(e.currentTarget));}}>
                        {renderFormGroups()}
                        <br />
                        <div className='d-flex justify-content-end'>
                            <Button color='primary' type='submit'>
                                Submit
                            </Button>
                        </div>
                    </Form>
                    <ItemModal modal={modal} setModal={setModal} color={color}/>
                </Container>
            </div>
            
        )
    }
}

export default Item;