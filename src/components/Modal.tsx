import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const VerticalModal = (props: any) => {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">AquilesCoin</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>¿Cómo funcionamos?</h4>
                <p>Nuestro algoritmo coge los datos a tiempo real de dos API recopilando la siguiente información:</p>
                <ul>
                    <li>Precio del Bitcoin en Euros y en Dólares.</li>
                    <li>Valor del Dólar respecto el Euro.</li>
                </ul>
                <p>
                    Con estos datos evaluamos si sale más a cuenta hacer un cambio de moneda previo para comprar BTC en una moneda en concreta y así poder conseguir más beneficio por el mismo precio.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default VerticalModal;
