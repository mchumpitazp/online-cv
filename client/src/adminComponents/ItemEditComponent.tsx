import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import BackButton from './BackButtonComponent';
import FormItem from './ItemFormComponent';
import ItemModal from './ItemModalComponent';

interface ItemEditProps {
    data: any
}

function ItemEdit (props: ItemEditProps) {
    const [submit, setSubmit] = React.useState(false);
    const [modalState, setModalState] = React.useState({
        isOpen: false,
        color: 'success',
        icon: 'check-circle-o',
        phrase: 'Successfully saved!'
    });

    const { item_title } = useParams();
    const { state } = useLocation();

    const submitForm = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData: FormData = new FormData(e.currentTarget);
        let newData: { [key: string]: any } = {};
        formData.forEach((value, key) => newData[key] = value );

        fetch(baseUrl + '/' + item_title + '/' + state.item_id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        })
        .then(response => response.json())
        .then(() => {
            setModalState({
                isOpen: true,
                color: 'success',
                icon: 'check-circle-o',
                phrase: 'Successfully saved!'
            });
        })
        .catch((error) => {
            console.log(error);
            setModalState({
                isOpen: true,
                color: 'danger',
                icon: 'exclamation-circle',
                phrase: 'Opsss! There is a problem.'
            });
        })
        .finally(() => setSubmit(true));
    }

    if (!props.data.isLoading) {
        const itemObj = props.data.data[item_title!]?.filter((obj: any) => obj._id === state.item_id)[0];
        
        return (
            <div className='admin'>
                <BackButton submit={submit}/>

                <Container id='item'>
                    <h4 id='item-title' className='admin-title'>{item_title} editor</h4>
                    <br />
                    <FormItem  onSubmit={submitForm}
                                itemObj={itemObj}
                                defaultValue={true} />
                    <ItemModal modalState={modalState} setModalState={setModalState} />
                </Container>
            </div>
            
        )
    }
}

export default ItemEdit;