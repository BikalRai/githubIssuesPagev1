import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { issueDetails, issueReducer } from '../Reducers/issueReducer';

const Issues = () => {
    const [issueData, dispatch] = useReducer(issueReducer, issueDetails);

    const getIssues = async () => {
        try {
            await axios
                .get('https://api.github.com/repos/facebook/react/issues')
                .then(({ data }) => {
                    dispatch({
                        type: 'ISSUES_FETCH_SUCCESS',
                        payload: data,
                    });
                });
        } catch (error) {
            console.log('Error!');
        }
    };

    useEffect(() => {
        getIssues();
    }, []);

    console.log(issueData, 'issues in isses page');

    return <></>;
};

export default Issues;
