import React, {useEffect, useMemo, useState} from 'react';
import {useFetching} from "../hookes/useFetching";
import CommentsService from "../API/CommentsService";
import Loader from "../UI/Loader/Loader";
import CommentsList from "../components/CommentsList";
import "../style/Comments.css"
import CommentPopUp from "../components/CommentPopUp";
import MySelect from "../UI/MySelect/MySelect";

const CommentsPage = () => {
    const [comments, setComments] = useState([])

    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async () => {
        const comments = await CommentsService.getAll()
        setComments(comments)
    })

    useEffect(() => {
        const storedComments = localStorage.getItem('comments');
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        } else {
            fetchComments();
        }
    }, []);

    const createComment = (newComment) => {
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
        localStorage.setItem('comments', JSON.stringify(updatedComments));
    }

    const removeComment = (comment) => {
        const updatedComments = comments.filter(p => p.id !== comment.id);
        setComments(updatedComments);
        localStorage.setItem('comments', JSON.stringify(updatedComments));
    }

    const [selectedSort, setSelectedSort] = useState('')

    const sortComments = (sort) => {
        setSelectedSort(sort)
        switch (sort) {
            case 'Name':
                setComments([...comments].sort((a, b) => a[sort].localeCompare(b[sort])));
                break;
            default:
                setComments([...comments].sort((a, b) => {
                    const dateA = new Date(
                        Number(a[sort].slice(6, 10)),
                        Number(a[sort].slice(3, 5)) - 1,
                        Number(a[sort].slice(0, 2))
                    )
                    const dateB = new Date(
                        Number(b[sort].slice(6, 10)),
                        Number(b[sort].slice(3, 5)) - 1,
                        Number(b[sort].slice(0, 2))
                    )
                    return dateA - dateB
                }));
                break;
        }

    }


    return (
        <div className="comments">
            <div className="control_div">
                <CommentPopUp create={createComment}/>
                <div>
                    <MySelect
                        value={selectedSort}
                        onChange={sortComments}
                        defaultValue="По умолчанию"
                        option={[
                            {value: 'Date', name: "По дате"},
                            {value: 'Name', name: "По имени"}

                        ]}
                    />
                </div>
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