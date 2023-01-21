import { Grid } from '@mui/material';
import React from 'react';
import AdjustIcon from '@mui/icons-material/Adjust';
import DoneIcon from '@mui/icons-material/Done';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './filters.css';

const Filters = () => {
    return (
        <>
            <Grid container px={10} pt={10} justifyContent="space-between">
                <Grid item>
                    <Grid container>
                        <a href="#!">
                            <AdjustIcon />
                            <p>908 Open</p>
                        </a>
                        <a href="#!" className="done">
                            <DoneIcon />
                            <p>11,088 closed</p>
                        </a>
                    </Grid>
                </Grid>
                <Grid item className="part-two">
                    <ul className="filter__items">
                        <li className="filter-item">
                            <button>
                                Author <ArrowDropDownIcon />
                            </button>
                        </li>
                        <li className="filter-item">
                            <button>
                                Label <ArrowDropDownIcon />
                            </button>
                        </li>
                        <li className="filter-item">
                            <button>
                                Projects <ArrowDropDownIcon />
                            </button>
                        </li>
                        <li className="filter-item">
                            <button>
                                Milestones <ArrowDropDownIcon />
                            </button>
                        </li>
                        <li className="filter-item">
                            <button>
                                Asignee <ArrowDropDownIcon />
                            </button>
                        </li>
                        <li className="filter-item">
                            <button>
                                Sort <ArrowDropDownIcon />
                            </button>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </>
    );
};

export default Filters;
