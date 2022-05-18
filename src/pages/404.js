import * as React from "react";
import Layout from "../components/Layout";
import {Box, Card, CardContent, Container, Typography} from "@mui/material";
import { cardMaterial } from "../styling/myCustomStylingComponents";

const boxStyling = {
    backgroundColor: '#e8f2ed',
    paddingTop: '8rem',
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 0,
    marginRight: 0,
    maxWidth: '100%',
    width: '100vw',
    minHeight: '93vh'
}

const NotFoundPage = () => (
  <Layout>
      <Box sx={{...boxStyling}}>
          <Container maxWidth="lg">
              <Card  sx={{...cardMaterial}}>
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                          <h1>Not Found</h1>
                          <p>Oops! The page you are looking for does not exist!</p>
                          <p>Error: 404 Not Found</p>
                      </Typography>
                  </CardContent>
              </Card>
          </Container>
      </Box>

  </Layout>
);

export default NotFoundPage;
