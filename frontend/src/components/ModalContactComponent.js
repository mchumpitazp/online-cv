import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

function ModalContact(props) {
    return(
        <Modal centered isOpen={props.isOpen} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle} tag='h3'>Contact Me</ModalHeader>
            <ModalBody>
                <h5>
                    <i className='fa fa-envelope me-3'></i>
                    mchumpitazp@gmail.com
                </h5>
                <h5 style={{'color': '#25d366'}}>
                    <i className="fa fa-whatsapp me-3"></i>
                    <a className='contact-modal-link' href="https://wa.me/51901444236" target="_blank" rel="noopener noreferrer">+51 901 444 236</a>
                </h5>
                <h5 style={{'color': '#0088cc'}}>
                    <i className='fa fa-telegram me-3'></i>
                    <a className='contact-modal-link' href="https://t.me/mchumpitazp" target="_blank" rel="noopener noreferrer">Send message</a>
                </h5>
            </ModalBody>
        </Modal>
    )
}

export default ModalContact;