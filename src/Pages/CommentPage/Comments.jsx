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
        } catch (error) {
            dispatch({ type: 'FETCH_COMMENTS_ERROR', payload: error });
        }
    };

    console.log(singleIssue, 'single issue');

    useEffect(() => {
        getComments();
    }, []);
    return <></>;
};

export default Comments;