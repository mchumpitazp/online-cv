import React from 'react';
import { Modal, ModalBody, Button, Alert } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

interface ItemDeleteModalProps {
    itemTitle: string,
    itemId: string,
    isOpen: boolean,
    setModal: (modal: boolean) => void
}

function ItemDeleteModal (props: ItemDeleteModalProps) {
    const toggle = () => props.setModal(!props.isOpen)

    const deleteItem = () => {
        fetch(baseUrl + '/' + props.itemTitle + '/' + props.itemId, {
            method: 'DELETE'
        })
        .then(() => window.location.reload())
        .catch((error) => console.log(error))
    }

    return (
        <Modal className='admin' isOpen={props.isOpen} toggle={toggle} centered >
            <Alert color='danger' className='text-center m-0' >
                <i className='fa fa-trash-o' style={{fontSize: '4rem'}}></i>
            </Alert>

            <ModalBody className='text-center'>
                <h5 className='text-secondary py-2'>Are you sure you want to delete?</h5>
                <div className='d-flex justify-content-around'>
                    <Button color='secondary' onClick={toggle}>
                        Cancel
                    </Button>
                    <Button color='danger' onClick={deleteItem}>
                        Yes, delete
                    </Button>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default ItemDeleteModal;