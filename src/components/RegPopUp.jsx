import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import MyButton from "../UI/Button/MyButton";

const RegPopUp = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>

            <MyButton onClick={handleShow}>Регистрация</MyButton>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Регистрация на игру: {props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Название команды</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Название команды"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
                            <Form.Label>Город</Form.Label>
                            <Form.Control
                                type="city"
                                placeholder="Город"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Номер телефона</Form.Label>
                            <Form.Control
                                type="Number"
                                placeholder="Номер телефона"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <MyButton onClick={handleClose}>
                        Сохранить
                    </MyButton>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default RegPopUp;