import React from 'react';
import './navbar.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="nav__container">
                    <div className="nav__item__box">
                        <div className="brand__container">
                            <Link>
                                <GitHubIcon
                                    fontSize="large"
                                    className="color-white"
                                />
                            </Link>
                        </div>
                        <div className="search__bar__container">
                            <input
                                className="nav-search"
                                type="search"
                                placeholder="Search or jump to"
                            />
                            <BorderColorIcon />
                        </div>
                    </div>
                    <div className="nav__links">
                        <ul className="nav-links">
                            <li className="nav-link">Pull requests</li>
                            <li className="nav-link">Issues</li>
                            <li className="nav-link">Codespaces</li>
                            <li className="nav-link">Marketplace</li>
                            <li className="nav-link">Explore</li>
                        </ul>
                    </div>

                    <div className="user__links">
                        <ul className="user-links-icons">
                            <li className="nav-link">
                                <NotificationsIcon />
                            </li>
                            <li className="nav-link">
                                <AddIcon />
                                <ArrowDropDownIcon />
                            </li>
                            <li className="nav-link">
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/1.jpg"
                                />
                                <ArrowDropDownIcon />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
