import React from 'react';
import Footer from '../Footer/Footer';
import Headertags from '../Header/Headertags';
import Navbar from '../Header/Navbar';
import SubNavlinks from '../Header/SubNavlinks';

const Layout = ({ children }) => {
    return (
        <>
            {/* header section */}
            <Navbar />
            <Headertags />
            <SubNavlinks />

            {/* content */}
            {children}

            {/* footer section */}
            <Footer />
        </>
    );
};

export default Layout;
