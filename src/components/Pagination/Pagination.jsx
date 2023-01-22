import React, { useState } from 'react';
import { issueDetails } from '../../Pages/Reducers/issueReducer';

const Pagination = () => {
    console.log(issueDetails, ' DETAILS!!!');

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalPosts, setTotalPosts] = useState(0);

    return <></>;
};

export default Pagination;
