import React  from "react"
import { Icon } from "@iconify/react"
import repoForked from "@iconify/icons-octicon/repo-forked"
import starIcon from "@iconify/icons-octicon/star"
import {Card, CardContent, Chip, Grid, Link, Typography} from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';

import colors from "./colors"
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";
import theme from "../theme";


const RepoCard = ({repo}) => {

    // values from API
    const {
        html_url,
        full_name,
        description,
        topics,
        language,
        stargazers_count,
        forks_count
    } = repo;

    // Scene to Render
    return (
        // Set breakpoints for screen sizes,
        // 12 = full width, 6 = half width, 4 = 1/3rd width
        <Grid item xs={12} sm={6} md={6} style={{marginBottom: '2rem'}}>

            {/*// Card for Repositories*/}
            <Card sx={{
                margin:'1.2rem',
                minWidth:'auto',
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                transition: ["transform", "box-shadow"]
                    .map((attr) => `${attr} ${theme.transitions.duration.standard}ms`)
                    .join(", "),
                "&:hover": {
                    transform: `translateY(-${theme.spacing(0.5)}px)`,
                    boxShadow: theme.shadows[4],
                },
            }}>

                <CardContent style={{
                    paddingBottom: "0 !important",
                }}>
                    <div style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        marginBottom: theme.spacing(1)
                    }} >

                        {/* Title of Repo */}
                        <Link href={html_url} target="_blank" rel="noopener">
                            <Typography
                                variant="body1"
                                component="p"
                                style={{
                                    wordWrap: "break-word",
                                    color: '#1765cc'
                                }}
                            >
                                {full_name}
                            </Typography>
                        </Link>

                        {/* Square with Arrow Icon */}
                        <Link
                            href={html_url}
                            target="_blank"
                            rel="noopener"
                            aria-label="launch">
                            <LaunchIcon sx={{
                                color: '#000',
                                verticalAlign: "text-bottom",
                                "&:hover": {
                                    color: '#1a73e8',
                                },
                            }} />
                        </Link>
                    </div>

                    {/* Repo Description */}
                    <Typography
                        variant="body2"
                        component="p"
                        paragraph
                        style={{
                            color: '#000'
                        }}
                    >
                        {description}
                    </Typography>
                </CardContent>

                {/* Repo Stats */}
                <div style={{
                    padding: theme.spacing(0, 2, 2)
                }}>
                    <div style={{
                        marginBottom: theme.spacing(1)
                    }}>
                        {topics.map((topic) => (
                            <Chip
                                key={topic}
                                size="small"
                                label={topic}
                                style={{
                                    marginRight: theme.spacing(1)
                                }}
                            />
                        ))}
                    </div>

                    {/* Repo Programming Language */}
                    <div>
                        {language && (
                            <span style={{
                                color: "inherit",
                                marginRight: theme.spacing(2),
                            }}>
                            <Typography variant="caption" component="span">
                                <span
                                    style={{
                                        display: "inline-block",
                                        borderRadius: "50%",
                                        height: 12,
                                        width: 12,
                                        marginRight: theme.spacing(0.5),
                                        verticalAlign: "text-bottom",
                                        background: colors[language].color
                                    }}
                                />
                                {language}
                            </Typography>
                        </span>
                        )}

                        {/* Repo Stars */}
                        <Link
                            href={`${html_url}/stargazers`}
                            target="_blank"
                            rel="noopener"
                            sx={{
                                color: '#333333',
                                marginRight: '1rem',
                                "&:hover" : {
                                    color: '#1765cc'
                                }
                            }}
                            underline="none">

                            <Typography variant="caption" component="span">
                                <Icon
                                    icon={starIcon}
                                    style={{
                                        marginRight: '0.5rem',
                                        verticalAlign: 'text-bottom'
                                    }}
                                    width={14}
                                    height={16}
                                />
                                {stargazers_count}
                            </Typography>
                        </Link>

                        {/* Repo Fork count */}
                        <Link
                            href={`${html_url}/network/members`}
                            target="_blank"
                            rel="noopener"
                            sx={{
                                color: '#333333',
                                marginRight: '1rem',
                                "&:hover" : {
                                    color: '#1765cc'
                                }
                            }}
                            underline="none"
                        >
                            <Typography variant="caption" component="span">
                                <Icon
                                    icon={repoForked}
                                    style={{
                                        marginRight: '0.5rem',
                                        verticalAlign: 'text-bottom'
                                    }}
                                    width={10}
                                    height={16}
                                />
                                {forks_count}
                            </Typography>
                        </Link>
                    </div>

                </div>
            </Card>
        </Grid>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoCard