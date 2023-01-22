import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { commentState, commentReducer } from '../Reducers/commentsReducer';

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

            const { data } = commentsData.map((comment) =>
                axios.post(
                    `https://api.github.com/markdown`,
                    {
                        text: comment.body,
                    },
                    config
                )
            );

            console.log(data, 'welcome!!!');

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

            // commentsData.map(async (comment) => {
            //     await axios.post(`https://api.github.com/markdown`, {
            //         text: comment.body,
            //     });
            // });

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
            <div
                dangerouslySetInnerHTML={{
                    __html: singleIssue.userContent.data,
                }}
            />

            {/* <p color="#fff">{singleIssue.userContent.data}</p> */}
        </>
    );
};

export default Comments;
