import {
    Avatar,
    Chip,
    Grid,
    IconButton,
    Pagination,
    Tooltip,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import Filters from '../../components/Pagefilters/Filters/Filters';
import { issueDetails, issueReducer } from '../Reducers/issueReducer';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import './issue.css';

const Issues = () => {
    const [issueData, dispatch] = useReducer(issueReducer, issueDetails);

    const { page, rowsPerPage } = issueDetails;

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

    //function to set page
    const handlePage = (e, newPage) => {
        console.log('i am changing!!', newPage);
        dispatch({ type: 'CHANGING_PAGE', payload: newPage });
    };

    console.log(issueDetails.page, 'page');

    useEffect(() => {
        getIssues();
    }, []);

    console.log(issueData, 'issues in isses page');

    return (
        <>
            <main>
                <Grid>
                    <Filters />
                    <div className="issues">
                        {issueData?.issues
                            ?.slice(
                                page * rowsPerPage - rowsPerPage,
                                page * rowsPerPage
                            )
                            .map((issue, index) => {
                                return (
                                    <div className="issue__card" key={index}>
                                        <div className="issue-header">
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={issue?.user.avatar_url}
                                            />
                                            <p>{issue?.title}</p>
                                            <ChatBubbleIcon />
                                            <span>2</span>
                                        </div>
                                        <div className="issue-created">
                                            <p>created at</p>
                                        </div>
                                        <div className="issue-labels">
                                            {issue?.labels?.map(
                                                (label, index) => {
                                                    return (
                                                        <>
                                                            <Tooltip
                                                                title={
                                                                    label.description
                                                                }
                                                            >
                                                                <Chip
                                                                    key={index}
                                                                    label={
                                                                        label.name
                                                                    }
                                                                    sx={{
                                                                        background: `#${label.color}`,
                                                                        marginRight:
                                                                            '0.5rem',
                                                                        color: 'rgb(10, 10, 150, 0.8)',
                                                                        fontWeight:
                                                                            'bold',
                                                                    }}
                                                                />
                                                            </Tooltip>
                                                        </>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                );
                            })}

                        <Pagination
                            className="pagination"
                            count={Math.ceil(
                                issueData.issues.length / rowsPerPage
                            )}
                            variant="outlined"
                            shape="rounded"
                            color="info"
                            onChange={handlePage}
                        />
                    </div>
                </Grid>
            </main>
        </>
    );
};

export default Issues;
