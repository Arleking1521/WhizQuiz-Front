import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import MyButton from "../UI/Button/MyButton";
import MyInput from "../UI/Input/MyInput";
import MySelect from "../UI/MySelect/MySelect";

const RegPopUp = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>

            <MyButton onClick={handleShow}>Регистрация</MyButton>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <div className="popUpRegHead">Регистрация на игру: {props.name}</div>
                </Modal.Header>
                <Modal.Body>

                    <div className="popUpInput">
                        <label>Название команды:</label>
                        <MyInput
                            type="teamName"
                            placeholder="Введите имя вашей команды"
                        />
                    </div>
                    <div className="popUpSelect">
                        <label>Город:</label>
                        <MySelect
                            defaultValue="По умолчанию"
                            option={[
                                {value: 'Almaty', name: "Алматы"},
                                {value: 'Astana', name: "Астана"}
                            ]}
                        />
                    </div>
                    <div className="popUpInput">
                        <label>Номер телефона:</label>
                        <MyInput
                            type="phone"
                            placeholder="Введите номер телефона"
                        />
                    </div>

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