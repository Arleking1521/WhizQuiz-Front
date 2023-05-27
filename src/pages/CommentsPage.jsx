import React, {useEffect, useRef, useState} from 'react';
import {useFetching} from "../hookes/useFetching";
import CommentsService from "../API/CommentsService";
import Loader from "../UI/Loader/Loader";
import CommentsList from "../components/CommentsList";
import "../style/Comments.css"
import CommentPopUp from "../components/CommentPopUp";
import MySelect from "../UI/MySelect/MySelect";
import {compareAsc, parseISO} from "date-fns";
const CommentsPage = () => {
    const [comments, setComments] = useState([])

    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async () => {
        const comments = await CommentsService.getAll()
        setComments(comments)
    })

    useEffect(() => {
        fetchComments();
    }, [])

    const createComment = (newComment) => {
        setComments([...comments, newComment])
    }

    const removeComment = (comment) =>{
        setComments(comments.filter(p => p.id !== comment.id))
    }

    const [selectedSort, setSelectedSort] = useState('')
    const sortComments = (sort) => {
        setSelectedSort(sort)
        switch (sort){
            case 'Name':
                setComments([...comments].sort((a,b) => a[sort].localeCompare(b[sort])));
                break;
            default:
                setComments([...comments].sort((a,b) => a.id.localeCompare(b.id)));
                break;
        }

    }

    return (
        <div className="comments">
            <CommentPopUp create={createComment}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortComments}
                    defaultValue="По умолчанию"
                    option={[
                        {value: 'Name', name: "По имени"},
                    ]}
                />
            </div>
            {
                commentsError && <div className="load">${commentsError}</div>
            }
            {isCommentsLoading ? <div className="load"><Loader/></div> :
                comments.length ? <CommentsList remove={removeComment} comments={comments}/> :
                    <div className="f_games">Отзывов нет!</div>
            }
        </div>
    );
};

export default CommentsPage;