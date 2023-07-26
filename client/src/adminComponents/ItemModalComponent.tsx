import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalBody, Button, Alert } from 'reactstrap';

interface ItemModalProps {
    modalState: {
        isOpen: boolean,
        color: string,
        icon: string,
        phrase: string
    },
    setModalState: (modalState: any) => void,
}

function ItemModal (props : ItemModalProps) {
    const toggle = () => props.setModalState((modalState: any) => ({
                                                ...modalState,
                                                isOpen: !props.modalState.isOpen
                                            }));

    return (
        <Modal className='admin' isOpen={props.modalState.isOpen} toggle={toggle} centered >
            <Alert color={props.modalState.color} className='text-center m-0' >
                <i className={`fa fa-${props.modalState.icon}`} style={{fontSize: '5rem'}}></i>
            </Alert>

            <ModalBody className='text-center'>
                <h5 className={`text-${props.modalState.color} py-2`}>{props.modalState.phrase}</h5>
                <Link to='/admin' reloadDocument>
                    <Button color={props.modalState.color} outline>
                        Close
                    </Button> 
                </Link>
            </ModalBody>
        </Modal>
    )
}

export default ItemModal;