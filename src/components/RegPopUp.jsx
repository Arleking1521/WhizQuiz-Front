import React, {useRef, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import MyButton from "../UI/Button/MyButton";
import MyInput from "../UI/Input/MyInput";
import MySelect from "../UI/MySelect/MySelect";

const RegPopUp = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] =useState('')

    const selectedCity = (city) => {
        setCity(city);
    }
    const addNewRequest = (e) => {
        e.preventDefault()
        if (name.trim() === "" || city.trim() === "" || phone.trim() === "") {
            if (name.trim() === "") {
                window.alert("Вы не ввели имя")
            } else if (city.trim() === "") {
                window.alert("Вы не ввели фамилию")
            } else if (phone.trim() === "") {
                window.alert("Вы не ввели email")
            }
            return;
        }

        const newRequest = {
            id: Date.now(),
            name,
            city,
            phone
        }
        console.log(newRequest)
        setName("");
        setCity("");
        setPhone("");
        setShow(false);
    }

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
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type="teamName"
                            placeholder="Введите имя вашей команды"
                        />
                    </div>
                    <div className="popUpSelect">
                        <label>Город:</label>
                        <MySelect
                            value={city}
                            onChange={selectedCity}
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
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            type="phone"
                            placeholder="Введите номер телефона"
                        />
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <MyButton onClick={addNewRequest}>
                        Сохранить
                    </MyButton>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default RegPopUp;