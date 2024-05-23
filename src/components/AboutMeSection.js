import React from "react"
import UserInfoCard from "../components/UserInfoCard";
import {Box, Container, Grid, Typography} from "@mui/material";

import {
    boxStyling,
    typoSubtitle,
    typoText,
    leftSideUserCardGridStyling,
    textAreaStyle
} from "../styling/myCustomStylingComponents"

export default function AboutMeSection() {

    return (

        <Box sx={{...boxStyling}}>
            <Container>
                <Grid container spacing={0}>

                    {/*left side item*/}
                    <Grid item xl={6} md={6} sm={12} sx={{...leftSideUserCardGridStyling}} >

                        {/* User Card Section */}
                        <UserInfoCard />

                    </Grid>

                    {/*right side item*/}
                    <Grid item xl={6} md={6} sm={12} sx={{...textAreaStyle}}>
                        <Container>
                            <Typography variant="subtitle1" align="left" sx={{...typoSubtitle}} paragraph>
                                ABOUT ME
                            </Typography>
                            <Typography
                                component="h1"
                                variant="h1"
                                align="left"
                                fontWeight={"bold"}
                                gutterBottom
                                sx={{fontSize: 72}}
                            >
                                Who I am.
                            </Typography>
                            <Typography variant="body1" align="left" sx={{ ...typoText, marginBottom: '4rem' }} paragraph>
                                Hi! I am Ryan, a Software Engineer based in North London, but originally from Liverpool.
                                <br />
                                I specialise in Full-Stack development using Java with Spring-Boot on the Back-End and JavaScript / TypeScript with React on the Front-End, as well as Data Analytics using Python, in my own time I'm also interested in Mobile Development with React Native.
                                <br /><br />
                                I'm always learning new technologies and building new software projects both for fun and to challenge myself.
                                <br /><br />
                                I am a Full-Stack Software Engineer with over 3 years of software development
                                experience in a commercial setting, as a Software Engineer my primary focus has
                                been on Java 11 & 17 based Spring Boot Backend Microservices for a large-scale
                                data platform, along with a React Typescript based Frontend.
                                <br/><br/>
                                My typical work consists of building out new functionality on a Spring Boot 2
                                based corporate data platform backend, from creating and securing new REST
                                endpoints, implementing new business logic on the service layer, creating
                                repository connections to a selection of MySQL Databases, MongoDB and Elasticsearch Indices
                                through Spring Data JPA, Entity to DTO data mapping, code performance analysis
                                and optimisation, Error handling along with both Unit and Integration testing.
                                Building out a Frontend with React using Axios to call new endpoints, aside from
                                working on the existing platform I also implement greenfield Full Stack
                                applications for both internal use and international corporate partners.
                                <br /><br />
                                My own Software Engineering interests are centered around Full-Stack Engineering, Cryptography (within the Java JCA),
                                Parallel Computing and Functional Programming.
                                <br /><br />
                                Some examples of which can be found in my personal projects below,
                                Keep on reading to find out more!
                            </Typography>

                        </Container>
                    </Grid>

                </Grid>
            </Container>

        </Box>
    )

}