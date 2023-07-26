import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import BackButton from "./BackButtonComponent";
import FormItem from "./ItemFormComponent";
import ItemModal from "./ItemModalComponent";

interface ItemNewProps {
    data: any
}

function ItemNew (props: ItemNewProps) {
    const [submit, setSubmit] = React.useState(false);
    const [modalState, setModalState] = React.useState({
        isOpen: false,
        color: 'success',
        icon: 'check-circle-o',
        phrase: 'Successfully saved!'
    });
    
    const { item_title } = useParams();

    const submitForm = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData: FormData = new FormData(e.currentTarget);
        let newData: { [key: string]: any } = {};
        formData.forEach((value, key) => newData[key] = value );

        fetch(baseUrl + '/' + item_title, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        })
        .then(response => response.json())
        .then(() => {
            setModalState({
                isOpen: true,
                color: 'success',
                icon: 'check-circle-o',
                phrase: 'Successfully created!'
            });
        })
        .catch((error) => {
            console.log(error);
            setModalState({
                isOpen: true,
                color: 'warning',
                icon: 'exclamation-triangle',
                phrase: 'Opsss! Seems it already exists or there is a problem.'
            });
        })
        .finally(() => setSubmit(true));
    }
    
    if (!props.data.isLoading) {
        const itemObj = props.data.data[item_title!][0];

        return (
            <div className='admin'>
                <BackButton submit={submit}/>

                <Container id='item'>
                    <h4 id='item-title' className='admin-title'>{item_title} creator</h4>
                    <br />
                    <FormItem  onSubmit={submitForm}
                                itemObj={itemObj}
                                defaultValue={false} />
                    <ItemModal modalState={modalState} setModalState={setModalState} />
                </Container>
            </div>
        );
    }
    
}

export default ItemNew;