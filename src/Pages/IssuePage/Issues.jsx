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
import AdjustIcon from '@mui/icons-material/Adjust';
import { calcDate } from '../../Utility/date';
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
    }, [page]);

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
                                            <Tooltip
                                                title={`
                                            ${issue?.title}`}
                                                placement="top"
                                            >
                                                <p>
                                                    <a
                                                        href={`/issues/${issue?.number}`}
                                                    >
                                                        {issue?.title}
                                                    </a>
                                                </p>
                                            </Tooltip>
                                            <a href={`/issues/${issue.number}`}>
                                                <ChatBubbleIcon />
                                                <span>{issue?.comments}</span>
                                            </a>
                                        </div>
                                        <div className="issue-created">
                                            <p>{`#${
                                                issue.number
                                            } opened ${calcDate(
                                                issue.created_at
                                            )} by ${issue.user.login}`}</p>
                                        </div>
                                        <div className="issue-labels">
                                            {issue?.labels?.map(
                                                (label, index) => {
                                                    return (
                                                        <Tooltip
                                                            title={
                                                                label.description
                                                            }
                                                            key={index}
                                                        >
                                                            <Chip
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
