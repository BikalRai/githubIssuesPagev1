import { Grid, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <Grid container p={10}>
                <Grid item>
                    <Grid container alignItems="center">
                        <GitHubIcon fontSize="large" sx={{ color: '#fff' }} />
                        <Typography
                            ml={2}
                            className="footer-year"
                        >{`© ${new Date().getFullYear()}`}</Typography>
                    </Grid>
                </Grid>
                <Grid item sx={{ width: '80%' }}>
                    <Grid container justifyContent="space-evenly">
                        <Link>
                            <Typography>Terms</Typography>
                        </Link>
                        <Link>
                            <Typography>Privacy</Typography>
                        </Link>
                        <Link>
                            <Typography>Security</Typography>
                        </Link>
                        <Link>
                            <Typography>Status</Typography>
                        </Link>
                        <Link>
                            <Typography>Docs</Typography>
                        </Link>
                        <Link>
                            <Typography>Contact GitHub</Typography>
                        </Link>
                        <Link>
                            <Typography>Pricing</Typography>
                        </Link>
                        <Link>
                            <Typography>Api</Typography>
                        </Link>
                        <Link>
                            <Typography>Training</Typography>
                        </Link>
                        <Link>
                            <Typography>Blog</Typography>
                        </Link>
                        <Link>
                            <Typography>About</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Footer;
