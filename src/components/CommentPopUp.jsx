import React, {useRef, useState} from 'react';
import MyInput from "../UI/Input/MyInput";
import MyButton from "../UI/Button/MyButton";
import {getMonthNumber} from "../functions/MonthTranslater";
import Modal from "react-bootstrap/Modal";

const CommentPopUp = ({create}) => {
    const [Name, setName] = useState('')
    const [currentDate, setCurrentDate] = useState(new Date())
    const commentInputRef = useRef();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const addNewComment = (e) => {
        e.preventDefault()
        const dateString = currentDate.toDateString();
        const [_, month, day, year] = dateString.split(' ');
        const Comment = commentInputRef.current.value;
        const numberMonth = getMonthNumber(month);
        const newComment = {
            id: Date.now(),
            Name,
            Date: `${day}.${numberMonth}.${year}`,
            Comment
        }
        create(newComment)
        setName("");
        commentInputRef.current.value = "";
    }
    return (
        <div>
            <MyButton onClick={handleShow}>Оставить отзыв</MyButton>

            <Modal className="com_popUp" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <div className="popUpHead">Спасибо за ваш отзыв!</div>
                </Modal.Header>
                <Modal.Body className="com_body">
                    {/* controlled component*/}
                    <div className="popUpInput">
                        <label >Имя:</label>
                        <MyInput
                            value={Name}
                            onChange={e => setName(e.target.value)}
                            type="name"
                            placeholder="Введите ваше имя"
                        />
                    </div>
                    {/*Uncontrolled component*/}
                    <div className="popUpInput">
                        <label >Отзыв:</label>
                        <textarea
                            className="commentInput"
                            ref={commentInputRef}
                            type="comment"
                            placeholder="Отзыв"
                        />
                    </div>
                    <MyButton onClick={addNewComment}>Сохранить</MyButton>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default CommentPopUp;