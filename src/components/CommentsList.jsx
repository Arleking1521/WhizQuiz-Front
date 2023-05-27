import React from 'react';
import CommentItem from "./CommentItem";

const CommentsList = (comments) => {
    return (
        <div>
            {comments.map((comment) =>
                <CommentItem comment={comment} key={comment.id}/>
            )}
        </div>
    );
};

export default CommentsList;