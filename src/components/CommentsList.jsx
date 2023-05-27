import React from 'react';
import CommentItem from "./CommentItem";

const CommentsList = ({comments, remove}) => {
    return (
        <div className="com_list">
            {comments.map((comment) =>
                <CommentItem remove={remove} comment={comment} key={comment.id}/>
            )}
        </div>
    );
};

export default CommentsList;