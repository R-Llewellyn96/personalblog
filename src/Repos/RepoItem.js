import React from 'react';
import PropTypes from 'prop-types';
import {Chip} from "@mui/material";
import theme from "../theme";

const RepoItem = ({ repo }) => {

    const chipStyling = {
        marginRight: theme.spacing(1)
    }

    return (
        <div className="card">
            <h3>
                <a href={repo.html_url} style={{color: "steelblue"}}>{repo.name}</a>
                <p> ID: {repo.id}</p>
                <p> Full Name: {repo.full_name}</p>
                <p> description: {repo.description}</p>
                <p> stargazers_count: {repo.stargazers_count}</p>
                <p> language: {repo.language}</p>
                <p> forks_count: {repo.forks_count}</p>
                <p> homepage: {repo.homepage}</p>
                <p> topics: {repo.topics}</p>
                {repo.topics.map((topic) => (
                    <Chip
                        key={topic}
                        size="small"
                        label={topic}
                        sx={{...chipStyling}}
                    />
                ))}
            </h3>
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem
