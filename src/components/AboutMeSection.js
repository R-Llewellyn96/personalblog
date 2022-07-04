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
            <Container sx={{marginTop: '3.5rem'}}>
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
                                Hi! I am Ryan, a Software Engineer from Liverpool.
                                <br />
                                I specialise in Full-Stack development using Java with Spring on the Back-End and JavaScript with ReactJS on the Front-End, as well as Data Analytics using Python and I also pursue an interest in Mobile Development with Kotlin on Android in my own time.
                                <br /><br />
                                I'm always learning new technologies and building new software projects both for fun and to challenge myself.
                                <br /><br />
                                Shortly after graduating from the University of Liverpool,
                                I joined IQBlade Ltd (Subsidiary of TD Synnex) as a Data Analyst and Software Engineer.<br /><br />
                                In my daily work, in Full-Stack development I build Back-End Microservices in Java, using Spring Boot, along with Front-End development using TypeScript with the Hilla framework and ReactJS,
                                interacting with a MySQL database.<br /><br />
                                In my Data Analytics work I create Data Scrapers in Python, using a mix of Selenium, BeautifulSoup 4, Requests and Pandas, as projects require,
                                as well as performing Data Cleaning.<br /><br />

                                My own Software Engineering interests are centered around Full-Stack Engineering, Cryptography (within the Java JCA),
                                Parallel Computing and Functional Programming. <br /><br />
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