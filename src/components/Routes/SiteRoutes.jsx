import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Issues from '../../Pages/IssuePage/Issues';

const SiteRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/issues" element={<Issues />} />
            </Routes>
        </>
    );
};

export default SiteRoutes;
