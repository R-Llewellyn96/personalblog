import React from "react";
import {
    Box,
    Card, CardActionArea,
    CardActions,
    CardContent,
    Container,
    Grid,
    Typography
} from "@mui/material";
import ChipsArray from "./ChipsArray";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJava} from "@fortawesome/free-brands-svg-icons/faJava";
import {faLeaf} from "@fortawesome/free-solid-svg-icons/faLeaf";
import {SiApachemaven} from "@react-icons/all-files/si/SiApachemaven";
import {faPython} from "@fortawesome/free-brands-svg-icons/faPython";
import {faDatabase} from "@fortawesome/free-solid-svg-icons/faDatabase";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import {faHtml5} from "@fortawesome/free-brands-svg-icons/faHtml5";
import {faCss3} from "@fortawesome/free-brands-svg-icons/faCss3";
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";
import {SiGatsby} from "@react-icons/all-files/si/SiGatsby";
import {SiSpring} from "@react-icons/all-files/si/SiSpring";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faDocker} from "@fortawesome/free-brands-svg-icons/faDocker";
import {faGitAlt} from "@fortawesome/free-brands-svg-icons/faGitAlt";
import {SiMaterialUi} from "@react-icons/all-files/si/SiMaterialUi";
import {SiPostgresql} from "@react-icons/all-files/si/SiPostgresql";
import {boxStyling} from "../styling/myCustomStylingComponents";

const chipDataFrontEnd = [
    {
        key: 0,
        label: 'HTML5',
        icon: <FontAwesomeIcon icon={faHtml5} size="lg" style={{fontSize: '150%', color: '#E34C26'}}/>
    },
    {
        key: 1,
        label: 'CSS3',
        icon: <FontAwesomeIcon icon={faCss3} size="lg" style={{fontSize: '150%', color: '#264de4'}}/>
    },
    {
        key: 2,
        label: 'JavaScript',
        icon: <SiJavascript  style={{fontSize: '150%', color: '#ffe873'}} />
    },
    {
        key: 3,
        label: 'React',
        icon: <FontAwesomeIcon icon={faReact} size="lg" style={{fontSize: '150%', color: '#61dbfb'}}/>
    },
    {
        key: 4,
        label: 'Material UI',
        icon: <SiMaterialUi style={{fontSize: '125%', color: '#00758f'}} />
    },
    {
        key: 5,
        label: 'Gatsby',
        icon: <SiGatsby  style={{fontSize: '150%', color: '#663399'}} />
    }
]

const chipDataBackend =  [
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
        label: 'Spring Security',
        icon: <SiSpring  style={{fontSize: '150%', color: '#6db33f'}} />
    },
    {
        key: 3,
        label: 'Maven',
        icon: <SiApachemaven  style={{fontSize: '150%', color: '#e97329'}} />
    },
    {
        key: 4,
        label: 'PostgreSQL',
        icon: <SiPostgresql style={{fontSize: '125%', color: '#00758f'}} />
    },
    {
        key: 5,
        label: 'MySQL',
        icon: <FontAwesomeIcon icon={faDatabase} size="lg" style={{fontSize: '150%', color: '#00758f'}}/>,
    }
]

const chipDataUtils = [
    {
        key: 0,
        label: 'Java',
        icon: <FontAwesomeIcon icon={faJava} size="lg" style={{fontSize: '150%', color: '#5382a1'}}/>
    },
    {
        key: 1,
        label: 'Python',
        icon: <FontAwesomeIcon icon={faPython} size="lg" style={{fontSize: '150%', color: '#ffe873'}}/>
    },
    {
        key: 2,
        label: 'Docker',
        icon: <FontAwesomeIcon icon={faDocker} size="lg" style={{fontSize: '150%', color: '#0db7ed'}}/>
    },
    {
        key: 3,
        label: 'Github',
        icon: <FontAwesomeIcon icon={faGithub} size="lg" style={{fontSize: '150%', color: '#333333'}}/>
    },
    {
        key: 4,
        label: 'Git',
        icon: <FontAwesomeIcon icon={faGitAlt} size="lg" style={{fontSize: '150%', color: '#f1502f'}}/>
    },
]

const myCards = [
    {
        id: 1,
        title: 'FRONT-END',
        text: 'Tools and Technologies I use for Front-End Web Development',
        chips: chipDataFrontEnd
    },
    {
        id: 2,
        title: 'BACK-END',
        text: 'Tools and Technologies I use for Back-End Server Development',
        chips: chipDataBackend
    },
    {
        id: 3,
        title: 'UTILITIES',
        text: 'Tools and Technologies I use for miscellaneous tasks and scripts',
        chips: chipDataUtils
    },
]

const MyToolsSection = () => {

    return (
        <Box sx={{...boxStyling, backgroundColor: '#f8f9fa', paddingTop: '8rem', paddingBottom: '8rem'}}>
            <Container maxWidth="lg">
                <Typography
                    component="h2"
                    variant="h2"
                    align="center"
                    color="#000"
                    fontWeight={"normal"}
                    gutterBottom
                    sx={{ marginBottom: '1rem'}}
                >
                    Tools & Technologies
                </Typography>
                <Typography
                    component="h5"
                    variant="h5"
                    align="center"
                    color="#000"
                    fontWeight={"normal"}
                    gutterBottom
                    sx={{ marginBottom: '4rem'}}
                >
                    A collection of the various tools and technologies I use to turn coffee into code.
                </Typography>

                {/* End hero unit */}
                <Grid container justifyContent="center" spacing={2}>
                    {myCards.map((card) => (
                        <Grid item key={card.id} xs={12} sm={6} md={4}>
                            <Card
                                elevation={0}
                                variant={'outlined'}
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: '2%'
                                }}
                            >
                                <CardActionArea>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography sx={{ color: '#073042'}} gutterBottom variant="subtitle2" fontWeight={'normal'} >
                                            {card.title}
                                        </Typography>

                                        <Typography sx={{ color: '#073042'}} variant="h5" fontSize={22} >
                                            {card.text}
                                        </Typography>
                                    </CardContent>

                                    {/*array of languages and tools used*/}
                                    <ChipsArray chipdata={card.chips}/>

                                    <CardActions sx={{ paddingBottom: '1rem'}}>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default MyToolsSection;
