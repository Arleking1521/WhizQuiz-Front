import React from 'react';
import MyButton from "../UI/Button/MyButton";

const CommentItem = (props) => {
    return (
        <div className="com_cont">
            <div className="cont">
                <div className="user_data">
                    <div className="user_name">{props.comment.Name}</div>
                    <div className="com_date">{props.comment.Date}</div>
                </div>
                <MyButton onClick={() => props.remove(props.comment)}>Удалить</MyButton>
            </div>

            <div className="user_com">{props.comment.Comment}</div>
        </div>
    );
};

export default CommentItem;