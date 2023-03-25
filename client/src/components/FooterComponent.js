import React from 'react';
import ModalContact from './ModalContactComponent';

function Footer() {
    const [isModalOpen, openModal] = React.useState(false);

    return(
        <React.Fragment>
            <footer className="py-2 px-4">
                <div id="footer-copyrights">
                    <h6 className="m-0">&copy; 2022 Mauro Chumpitaz Polino</h6> 
                </div>

                <div id="footer-links">
                    <h3><i onClick={() => openModal(true)} className="fa fa-envelope fa-lg"></i></h3>

                    <a href="https://github.com/mchumpitazp" className="ms-3" target="_blank" rel="noopener noreferrer">
                        <h3><i className="fa fa-github fa-lg"></i></h3>
                    </a>
                </div>
            </footer>

            <ModalContact isOpen={isModalOpen} toggle={() => openModal(false)} />
        </React.Fragment>
    );
}

export default Footer;