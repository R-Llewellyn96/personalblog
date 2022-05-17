import {Box, Button, Container, Grid, Typography} from "@mui/material";
import ChipsArray from "./ChipsArray";
import React from "react";
import { SiApachemaven } from "@react-icons/all-files/si/SiApachemaven";
import theme from "../theme";
import ExperienceTimeline from "./ExperienceTimeline";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJava} from "@fortawesome/free-brands-svg-icons/faJava";
import {faLeaf} from "@fortawesome/free-solid-svg-icons/faLeaf";
import {faPython} from "@fortawesome/free-brands-svg-icons/faPython";
import {faDatabase} from "@fortawesome/free-solid-svg-icons/faDatabase";


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
        color: '#000',  fontSize: 16, marginTop: '4rem'
    }

    const typoText = {
        color: '#000',
        fontSize: 20
    }

    const buttonInBox = {
        borderRadius: 28,
        textTransform: 'none',
        fontWeight: 'normal',
        fontSize: 16,
        padding: '-10px -5px -5px -10px',
        color: '#fff',
        backgroundColor: '#073042',
        borderWidth: '2px',
        marginTop: '2rem',
        marginBottom: '8rem',
        "&:hover": {
            color: theme.palette.secondary.main,
            backgroundColor: '#073042',
            borderColor: '#073042',
            borderWidth: '2px',
            padding: '-10px -5px -5px -10px',
        },
    }

    const textAreaStyle = {
        paddingLeft: '64px',
        paddingRight: '64px',
        justifyContent: 'center'
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
                                color="#000"
                                fontWeight={"bold"}
                                gutterBottom
                                sx={{fontSize: 72}}
                            >
                                What I do<br/>9 to 5.
                            </Typography>
                            <Typography variant="body1" align="left" sx={{...typoText}} paragraph>
                                Data Analytics Department
                                <ul className="list" style={{ marginLeft:'1rem', listStyle: 'disc outside'}}>
                                    <li>Creation of Backend-Services and REST APIs using Spring Boot with Java and Flask with Python.</li>
                                    <li>Interfacing with a MySQL database and Snowflake Data Warehouse</li>
                                    <li>Web Scraping with Python, using Requests, Selenium, BeautifulSoup and ActionChains.</li>
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