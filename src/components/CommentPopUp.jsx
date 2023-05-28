import React, {useRef, useState} from 'react';
import MyInput from "../UI/Input/MyInput";
import MyButton from "../UI/Button/MyButton";
import {getMonthNumber} from "../functions/MonthTranslater";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

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
        if (Name.trim() === "" || Comment.trim() === "") {
            if(Name.trim() === ""){
                Swal.fire({
                    title: 'Желаете оставить анонимный отзыв?',
                    text: 'Вы не ввели имени',
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: 'Да',
                    cancelButtonText: 'Нет'
                }).then(r => {
                    if (r.isConfirmed) {
                        setName("Аноним")
                    } else if (r.dismiss === Swal.DismissReason.cancel) {
                        setName('')
                    }
                });
            }
            else{
                Swal.fire({
                    title: 'Передумали оставлять отзыв?',
                    text: 'Вы не написали отзыв',
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: 'Да',
                    cancelButtonText: 'Нет'
                }).then(r => {
                    if (r.isConfirmed) {
                        setShow(false);
                        setName("");
                        commentInputRef.current.value = "";
                    } else if (r.dismiss === Swal.DismissReason.cancel) {

                    }
                });
            }
            return;
        }
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