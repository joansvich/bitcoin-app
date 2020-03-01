import React, { useState } from 'react';

import '../css/App.css';

import { PriceDetailsPage } from '../features/priceDetails/priceDetailsPage';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import VerticalModal from '../components/Modal';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Fade from 'react-bootstrap/Fade';

const App: React.FC = () => {
    const [modalShow, setModalShow] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };
    return (
        <Container fluid className="p-0">
            <div className="header p-5">
                <h1 className="header m-5">Con AquilesCoin, conseguirás más Bitcoins gastando el mismo dinero</h1>
                <div className="d-flex justify-content-center align-items-center">
                    <Button className="m-2 mt-5" size="lg" variant="success" onClick={() => handleClick()}>
                        ¡Vamos allá!
                    </Button>{' '}
                    <p></p>
                    <Button className="m-2 mt-5" size="lg" variant="info" onClick={() => setModalShow(true)}>
                        ¿Cómo funciona?
                    </Button>
                    <VerticalModal show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <div className="img-bg d-flex justify-content-center align-items-start">
                <Fade in={open}>
                    <Jumbotron className="p-4">{open && <PriceDetailsPage />}</Jumbotron>
                </Fade>
            </div>
        </Container>
    );
};

export default App;
