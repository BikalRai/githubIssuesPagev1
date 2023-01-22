import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { commentState, commentReducer } from '../Reducers/commentsReducer';
import AdjustIcon from '@mui/icons-material/Adjust';
import { calcDate } from '../../Utility/date';
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
                }
                // {
                //     headers: {
                //         Authorization: `Basic ${token}`,
                //     },
                // }
            );
            dispatch({ type: 'GET_HTML_DATA', payload: userPost });

            // const { data } = singleIssue.comments.map((comment) =>
            //     axios.post(
            //         `https://api.github.com/markdown`,
            //         {
            //             text: comment.body,
            //         },
            //         config
            //     )
            // );

            console.log(userPost, 'user conts');
        } catch (error) {
            dispatch({ type: 'FETCH_COMMENTS_ERROR', payload: error });
        }
    };

    console.log(singleIssue, 'single issue');

    useEffect(() => {
        getComments();
    }, []);
    return (
        <>
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
                        )} . ${singleIssue?.issue?.comments} comments`}</span>
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
                            __html: singleIssue?.userContent?.data,
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default Comments;
