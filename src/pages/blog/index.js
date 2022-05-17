import * as React from "react";
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import {Box, Container, Typography} from "@mui/material";
import {boxStyling} from "../../styling/myCustomStylingComponents";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
          <Box sx={{...boxStyling}}>
              <Container sx={{ paddingTop: '8rem', paddingBottom: '4rem'}} maxWidth="lg">
                  <Typography
                      component="h4"
                      variant="h4"
                      align="center"
                      color="#000"
                      fontWeight={"normal"}
                      gutterBottom
                      sx={{ marginBottom: '1rem'}}
                  >
                      Ryan's Blog
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
                      A collection of thoughts and ramblings on a variety of topics that interest me.
                  </Typography>
                  <section className="section">
                      <div className="container">
                          <div className="content">
                              <BlogRoll />
                          </div>
                      </div>
                  </section>
              </Container>
          </Box>
      </Layout>
    );
  }
}
