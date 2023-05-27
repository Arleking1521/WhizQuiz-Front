import React from 'react';
import GamesItem from "./GamesItem";

const CommentsList = (comments) => {
    return (
        <div>
            {comments.map((comment) =>
                <GamesItem comment={comment} key={comment.id}/>
            )}
        </div>
    );
};

export default CommentsList;