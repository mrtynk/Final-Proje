import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const SearchButton = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <a href="#" className="main-menu__search search-toggler icon-search-interface-symbol" variant="primary" onClick={handleShow}></a>
            <div className="search-popup">
                <Modal show={show} onHide={handleClose} className="search-overlay">
                    <form action="#">
                        <label htmlFor="search" className="sr-only">Ara</label>
                        <input type="text" id="search" placeholder="Burada ara..." />
                        <button type="submit" aria-label="arama gönder" className="thm-btn2">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </form>
                </Modal>
            </div>
        </>
    )
}

export default SearchButton;
