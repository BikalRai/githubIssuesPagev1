import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Comments from '../../Pages/CommentPage/Comments';
import Issues from '../../Pages/IssuePage/Issues';

const SiteRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/issues" element={<Issues />} />
                <Route path="/issues/:issueNumber" element={<Comments />} />
            </Routes>
        </>
    );
};

export default SiteRoutes;
