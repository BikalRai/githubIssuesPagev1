import { Button, ButtonGroup, Chip, Grid, Typography } from '@mui/material';
import React from 'react';
import './navbar.css';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Headertags = () => {
    return (
        <>
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                    <Grid container pt={10} px={10} alignItems="center" gap={1}>
                        <LaptopMacIcon sx={{ color: '#fff' }} />
                        <Typography
                            variant="h4"
                            sx={{ color: 'rgb(169, 205, 239)' }}
                        >
                            facebook /
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{ color: 'rgb(169, 205, 239)' }}
                        >
                            react
                        </Typography>
                        <Chip label="Public" variant="outlined" color="info" />
                    </Grid>
                </Grid>
                <Grid item pt={10} pr={10}>
                    <ButtonGroup
                        variant="outlined"
                        aria-label="outlined button group"
                    >
                        <Button>
                            <VisibilityIcon />
                            <Typography mx={1}>Watch</Typography>
                            <ArrowDropDownIcon />
                        </Button>
                        <Button>
                            <AltRouteIcon />
                            <Typography ml={1}>Fork</Typography>
                            <ArrowDropDownIcon />
                        </Button>
                        <Button>
                            <StarOutlineIcon />
                            <Typography ml={1}>Star</Typography>
                            <ArrowDropDownIcon />
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </>
    );
};

export default Headertags;
