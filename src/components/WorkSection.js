import {Box, Button, Container, Grid, Typography} from "@mui/material";
import ChipsArray from "./ChipsArray";
import React from "react";
import { SiApachemaven } from "@react-icons/all-files/si/SiApachemaven";
import ExperienceTimeline from "./ExperienceTimeline";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJava} from "@fortawesome/free-brands-svg-icons/faJava";
import {faLeaf} from "@fortawesome/free-solid-svg-icons/faLeaf";
import {faPython} from "@fortawesome/free-brands-svg-icons/faPython";
import {faDatabase} from "@fortawesome/free-solid-svg-icons/faDatabase";
import {buttonInBox, textAreaStyle} from "../styling/myCustomStylingComponents";


const chipDataExperience = [
    {
        key: 0,
        label: 'Java',
        icon: <FontAwesomeIcon icon={faJava} size="lg" style={{fontSize: '150%', color: '#5382a1'}}/>
    },
    {
        key: 1,
        label: 'Spring Boot',
        icon: <FontAwesomeIcon icon={faLeaf} size="lg" style={{fontSize: '150%', color: '#6db33f'}}/>
    },
    {
        key: 2,
        label: 'Maven',
        icon: <SiApachemaven  style={{fontSize: '150%', color: '#e97329'}} />
    },
    {
        key: 3,
        label: 'Python',
        icon: <FontAwesomeIcon icon={faPython} size="lg" style={{fontSize: '150%', color: '#ffe873'}}/>

    },
    {
        key: 4,
        label: 'MySQL',
        icon: <FontAwesomeIcon icon={faDatabase} size="lg" style={{fontSize: '150%', color: '#00758f'}}/>
    }
]

const WorkSection = () => {

    const boxStyling = {
        backgroundColor: '#d7effe',
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: 0,
        marginRight: 0,
        maxWidth: '100%',
        width: 'auto',
        height: 'auto'
    }

    const typoSubtitle = {
        fontSize: 16,
        marginTop: '4rem'
    }

    const typoText = {
        fontSize: 20
    }

    return (
        <Box sx={{...boxStyling}}>
            <Container>
                <Grid container spacing={0}>

                    {/*left side item*/}
                    <Grid item xl={6} md={6} sm={12} sx={{...textAreaStyle, marginTop: '12%', marginBottom: '10%'}} >
                        <ExperienceTimeline />
                    </Grid>

                    {/*right side item*/}
                    <Grid item xl={6} md={6} sm={12} sx={{...textAreaStyle}}>
                        <Container>
                            <Typography variant="subtitle1" align="left" sx={{...typoSubtitle}} paragraph>
                                EXPERIENCE
                            </Typography>
                            <Typography
                                component="h1"
                                variant="h1"
                                align="left"
                                fontWeight={"bold"}
                                gutterBottom
                                sx={{fontSize: 72}}
                            >
                                What I do<br/>9 to 5.
                            </Typography>
                            <Typography component={'div'} variant="body1" align="left" sx={{...typoText}} paragraph>
                                Software Engineering Department
                                <ul className="list" style={{ marginLeft:'1rem', listStyle: 'disc outside'}}>
                                    <li>Taking ownership of an entire project to be created for a client, implementing Back-end, Front-end and Database schema, based on a client's requirements</li>
                                    <li>Creation of Back-end Services and REST APIs using Spring Boot with Java.</li>
                                    <li>Creation of Front-end Services using React with JavaScript and TypeScript, as well as Lit when using the Hilla Framework.</li>
                                    <li>Interfacing with a MySQL database, ElasticSearch (NoSQL) and Snowflake Data Warehouse</li>
                                </ul>
                            </Typography>

                            {/*array of languages and tools used*/}
                            <ChipsArray chipdata={chipDataExperience}/>

                            <Button variant="contained" href="https://github.com/R-Llewellyn96" size={"large"} sx={{...buttonInBox}}
                            > LEARN MORE</Button>

                        </Container>
                    </Grid>

                </Grid>
            </Container>

        </Box>
    );
}

export default WorkSection;