import { Grid, Typography } from '@mui/material';
import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import AdjustIcon from '@mui/icons-material/Adjust';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import SsidChartIcon from '@mui/icons-material/SsidChart';

const SubNavlinks = () => {
    return (
        <>
            <Grid container pt={5} px={10}>
                <Grid item mr={2} className="sub__navlinks">
                    <Grid container className="active" py={1}>
                        <CodeIcon className="color-white" />
                        <Link>
                            <Typography
                                ml={1}
                                className="color-white sub-navlink"
                            >
                                Code
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item mr={2} className="sub__navlinks">
                    <Grid container py={1}>
                        <AdjustIcon className="color-white" />
                        <Link to="/issues">
                            <Typography
                                ml={1}
                                className="color-white sub-navlink"
                            >
                                Issues
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item mr={2} className="sub__navlinks">
                    <Grid container py={1}>
                        <AddRoadIcon className="color-white" />
                        <Link>
                            <Typography
                                ml={1}
                                className="color-white sub-navlink"
                            >
                                Pull requests
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item mr={2} className="sub__navlinks">
                    <Grid container py={1}>
                        <PlayCircleOutlineIcon className="color-white" />
                        <Link>
                            <Typography
                                ml={1}
                                className="color-white sub-navlink"
                            >
                                Actions
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item mr={2} className="sub__navlinks">
                    <Grid container py={1}>
                        <BackupTableIcon className="color-white" />
                        <Link>
                            <Typography
                                ml={1}
                                className="color-white sub-navlink"
                            >
                                Projects
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item mr={2} className="sub__navlinks">
                    <Grid container py={1}>
                        <MenuBookIcon className="color-white" />
                        <Link>
                            <Typography
                                ml={1}
                                className="color-white sub-navlink"
                            >
                                Wiki
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item mr={2} className="sub__navlinks">
                    <Grid container py={1}>
                        <GppMaybeIcon className="color-white" />
                        <Link>
                            <Typography
                                ml={1}
                                className="color-white sub-navlink"
                            >
                                Security
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item mr={2} className="sub__navlinks">
                    <Grid container py={1}>
                        <SsidChartIcon className="color-white" />
                        <Link>
                            <Typography
                                ml={1}
                                className="color-white sub-navlink"
                            >
                                Insights
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default SubNavlinks;
