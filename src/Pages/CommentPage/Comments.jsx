import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import * as DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';
import { commentState, commentReducer } from '../Reducers/commentsReducer';
import AdjustIcon from '@mui/icons-material/Adjust';
import { calcDate } from '../../Utility/date';
import { Preview } from '@mui/icons-material';
import spin from '../../assets/spin.gif';
import './comment.css';

const Comments = () => {
    const [singleIssue, dispatch] = useReducer(commentReducer, commentState);

    const { issueNumber } = useParams();
    console.log(issueNumber, 'issueNumber');

    const getComments = async () => {
        try {
            const { data: issue } = await axios.get(
                `https://api.github.com/repos/facebook/react/issues/${issueNumber}`
            );
            dispatch({ type: 'FETCH_ISSUE_SUCCESS', payload: issue });

            const { data: commentsData } = await axios.get(
                `https://api.github.com/repos/facebook/react/issues/${issueNumber}/comments`
            );
            dispatch({ type: 'FETCH_COMMENTS_SUCCESS', payload: commentsData });
            console.log(commentsData, ' comments');

            const token = `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`;
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };

            const userPost = await axios.post(
                `https://api.github.com/markdown`,
                {
                    text: issue.body,
                },
                config
            );
            dispatch({ type: 'GET_HTML_DATA', payload: userPost });

            commentsData?.map((comment) =>
                axios
                    .post(
                        'https://api.github.com/markdown',
                        {
                            text: comment.body,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    )
                    .then(({ data }) => {
                        console.log(data, 'getting it!!');
                        dispatch({
                            type: 'POST_TEXT_SUCCESS',
                            payload: data,
                        });
                    })
            );

            console.log(userPost, 'user conts');
        } catch (error) {
            dispatch({ type: 'FETCH_COMMENTS_ERROR', payload: error });
        }
    };

    console.log(singleIssue, 'single issue');

    useEffect(() => {
        setTimeout(() => {
            getComments();
        }, 3000);
    }, []);
    return (
        <>
            {singleIssue.loading ? (
                <div className="loader__container">
                    <img className="loader" src={spin} alt="loader" />
                </div>
            ) : (
                <div className="comment__container">
                    <div className="comment-author">
                        <h1>{`${singleIssue?.issue?.title} #${singleIssue?.issue?.number}`}</h1>
                        <div className="author-heading">
                            <button className="status">
                                <AdjustIcon />
                                <span>{singleIssue?.issue?.state}</span>
                            </button>
                            <span>{`${
                                singleIssue?.issue?.user?.login
                            } opened this issue ${calcDate(
                                singleIssue?.issue?.created_at
                            )} . ${
                                singleIssue?.issue?.comments
                            } comments`}</span>
                        </div>

                        <div className="author-stat">
                            <img
                                className="author-img"
                                src={singleIssue?.issue?.user?.avatar_url}
                                alt=""
                            />
                            <span>{`commented`}</span>
                        </div>

                        <div
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    singleIssue?.userContent?.data
                                ),
                            }}
                        />
                        <h1>hey</h1>
                        {singleIssue?.allComments?.map((comment, index) => {
                            return (
                                <div className="comment-reply" key={index}>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(comment),
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default Comments;
