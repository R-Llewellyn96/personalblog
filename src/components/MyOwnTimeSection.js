import {Box, Button, Chip, Container, Divider, Grid, Typography} from "@mui/material";
import ChipsArray from "./ChipsArray";
import {SiApachemaven} from "@react-icons/all-files/si/SiApachemaven";
import {SiGatsby} from "@react-icons/all-files/si/SiGatsby";
import {SiMaterialUi} from "@react-icons/all-files/si/SiMaterialUi";
import {SiPostgresql} from "@react-icons/all-files/si/SiPostgresql";
import React from "react";
import Repos from "../Repos/Repos";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJava} from "@fortawesome/free-brands-svg-icons/faJava";
import {faLeaf} from "@fortawesome/free-solid-svg-icons/faLeaf";
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";
import {buttonInBox, textAreaStyle} from "../styling/myCustomStylingComponents";

const MyOwnTimeSection = () => {

    const boxStyling = {
        backgroundColor: '#eff7cf',
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

    const chipDataMyTime = [
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
            label: 'PostgreSQL',
            icon: <SiPostgresql style={{fontSize: '125%', color: '#00758f'}} />
        },
        {
            key: 3,
            label: 'Maven',
            icon: <SiApachemaven  style={{fontSize: '150%', color: '#e97329'}} />
        },
        {
            key: 4,
            label: 'React',
            icon: <FontAwesomeIcon icon={faReact} size="lg" style={{fontSize: '150%', color: '#61dbfb'}}/>
        },
        {
            key: 5,
            label: 'Material UI',
            icon: <SiMaterialUi style={{fontSize: '125%', color: '#00758f'}} />
        },
        {
            key: 6,
            label: 'Gatsby',
            icon: <SiGatsby style={{fontSize: '125%', color: '#663399'}} />
        }
    ]

    const repos = [
        {
            id: 'uniqueId1',
            html_url: "https://github.com/R-Llewellyn96/personalblog",
            full_name: "R-Llewellyn96/personalblog",
            description: "Code for Gatsby and Netlify Personal Blog",
            topics: [],
            language: "JavaScript",
            stargazers_count: 0,
            forks_count: 0
        },
        {
            id: 'uniqueId2',
            html_url: "https://github.com/R-Llewellyn96/Python-LCCSpending",
            full_name: "R-Llewellyn96/Python-LCCSpending",
            description: "Liverpool City Council Spending challenge.",
            topics: [],
            language: "Python",
            stargazers_count: 0,
            forks_count: 0
        },
        {
            id: 'uniqueId3',
            html_url: "https://github.com/R-Llewellyn96/Java-TwitterAnalyser",
            full_name: "R-Llewellyn96/Java-TwitterAnalyser",
            description: "Targeted Tweet Analyser which uses Stanford's Natural Language Processing Library to perform sentiment analysis and a targeted keyword search for different topics.",
            topics: [],
            language: "Java",
            stargazers_count: 0,
            forks_count: 0
        },
        {
            id: 'uniqueId4',
            html_url: "https://github.com/R-Llewellyn96/Java-AESEncryption",
            full_name: "R-Llewellyn96/Java-AESEncryption",
            description: "Implementation of AES Encryption / Decryption using the Java Cryptography Extension and JavaFX.",
            topics: [],
            language: "Java",
            stargazers_count: 0,
            forks_count: 0
        },
        {
            id: 'uniqueId5',
            html_url: "https://github.com/R-Llewellyn96/Java-arrayRegex",
            full_name: "R-Llewellyn96/Java-arrayRegex",
            description: "Java Microservice which performs a match and replace regex using parallel streams on a string array passed as an argument to the program, returns a modified string array.",
            topics: [],
            language: "Java",
            stargazers_count: 0,
            forks_count: 0
        },
    ]

    return (
        <Box
            sx={{...boxStyling}}>
            <Container>
                <Grid container spacing={0}>

                    {/*left side item*/}
                    <Grid item xl={6} md={6} sm={12} sx={{...textAreaStyle}}>
                        <Container>
                            <Typography variant="subtitle1" align="left" sx={{...typoSubtitle}} paragraph>
                                PASSION
                            </Typography>
                            <Typography
                                component="h1"
                                variant="h1"
                                align="left"
                                fontWeight={"bold"}
                                gutterBottom
                                sx={{fontSize: 72}}
                            >
                                What I do<br/>in my own time.
                            </Typography>
                            <Typography component={'div'} variant="body1" align="left" sx={{...typoText}} paragraph>
                                Personal Projects which interest me
                                <ul className="list" style={{ marginLeft:'1rem', listStyle: 'disc outside'}}>
                                    <li>Experimentation with Back-End services using Java with Spring Boot</li>
                                    <li>Implementing SPAs and Static Sites on the Front-End using React and Material-UI with Gatsby</li>
                                    <li>Interfacing with a Postgres database</li>
                                    <li>Functional Programming in Java and utilisation of the Parallel Streams API</li>
                                    <li>Experimenting with Cryptography in Java, utilising the Java Cryptography Extension of the Java Cryptography Architecture</li>
                                </ul>
                            </Typography>

                            {/*array of languages and tools used*/}
                            <ChipsArray chipdata={chipDataMyTime} />

                            <Button variant="contained" href="https://github.com/R-Llewellyn96" size={"large"} sx={{...buttonInBox}}
                            > LEARN MORE</Button>

                        </Container>
                    </Grid>

                    {/*right side item*/}
                    <Grid item xl={6} md={6} sm={12} sx={{
                        paddingLeft: '4px',
                        paddingRight: '4px',
                        justifyContent: 'center',
                        marginTop: '5%',
                        marginBottom: '5%'}} >
                        {/*<CustomizedTimeline />*/}
                        {/*Repositories section*/}

                        <Divider >
                            <Chip label="Favourite Repositories" sx={{backgroundColor: '#FAF9F6', fontSize: '80%'}}/>
                        </Divider>

                        {/*Call Repository Cards for user*/}
                        <Repos repos={repos} />

                    </Grid>

                </Grid>
            </Container>

        </Box>
    );
}

export default MyOwnTimeSection;