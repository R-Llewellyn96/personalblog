import React from "react"
import UserInfoCard from "../components/UserInfoCard";
import {Box, Container, Grid, Typography} from "@mui/material";

import {
    boxStyling,
    typoSubtitle,
    typoText,
    textAreaStyle,
    leftSideUserCardGridStyling
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
                                color="#000"
                                fontWeight={"bold"}
                                gutterBottom
                                sx={{fontSize: 72}}
                            >
                                Who I am.
                            </Typography>
                            <Typography variant="body1" align="left" sx={{ ...typoText, marginBottom: '4rem' }} paragraph>
                                Hi! I am Ryan from Liverpool and I enjoy learning new technologies and building random software projects (useful or useless) for fun.<br />
                                <br />
                                Shortly after graduating from the University of Liverpool,
                                I joined IQBlade Ltd (Subsidiary of TD Synnex) as a Data Analyst.<br />
                                In my daily work, I design and create Back-End Microservices in Java, using Spring Boot,
                                interacting with a MySQL database.<br /><br />
                                As well as creating Data Scrapers in Python, using a mix of Selenium, BeautifulSoup 4, Requests and Pandas, as projects require, <br />
                                and performing Data Cleaning.<br /><br />

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