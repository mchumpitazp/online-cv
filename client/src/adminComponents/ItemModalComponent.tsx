import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Alert, ModalBody } from 'reactstrap';

interface ItemModalProps {
    modal: boolean,
    color: string,
    setModal: (set: boolean) => void,
}

function ItemModal ({color, modal, setModal} : ItemModalProps) {
    const toggle = () => setModal(!modal);
    const text = (color === 'success') ? 'Successfully saved!' : 'Opsss! There is a problem.';
    const icon = (color === 'success') ? 'check-circle-o' : 'exclamation-circle';

    return (
        <Modal className='admin' isOpen={modal} toggle={toggle} centered >
            <Alert color={color} className='text-center m-0' >
                <i className={`fa fa-${icon}`} style={{fontSize: '5rem'}}></i>
            </Alert>

            <ModalBody className='text-center'>
                <h5 className={`text-${color} py-2`}>{text}</h5>
                <Link to='/admin' reloadDocument>
                    <Button color={color} outline>
                        Close
                    </Button> 
                </Link>
            </ModalBody>
        </Modal>
    )
}

export default ItemModal;