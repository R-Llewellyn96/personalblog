import React from 'react';
import {Grid} from "@mui/material";

import PropTypes from 'prop-types';
import RepoCard from "./RepoCard";

// Styles allows styling inside react components
const gridContainer = {
    marginBottom: '3rem',
    justifyContent: 'center'
}

const Repos = ({ repos }) => {

    return (
        //repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
        // Use Grid to make our cards responsive
        <Grid container sx={{...gridContainer}}>
            {repos.map(repo => (
                <RepoCard repo={repo} key={repo.id} />
            ))}
        </Grid>
    );
};

Repos.propTypes = {
    repos: PropTypes.array.isRequired
};

export default Repos;