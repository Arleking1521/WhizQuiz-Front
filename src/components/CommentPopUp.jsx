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
                <Modal.Body>
                    {/* controlled component*/}
                    <MyInput
                        value={Name}
                        onChange={e => setName(e.target.value)}
                        type="name"
                        placeholder="Введите ваше имя"
                    />
                    {/*Uncontrolled component*/}
                    <MyInput
                        ref={commentInputRef}
                        type="name"
                        placeholder="Отзыв"
                    />
                    <MyButton onClick={addNewComment}>Сохранить</MyButton>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default CommentPopUp;