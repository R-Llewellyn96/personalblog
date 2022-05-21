import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import {cardMaterial} from "../styling/myCustomStylingComponents";
import {Box, Card, CardContent, Container, Typography} from "@mui/material";

const boxStyling = {
  backgroundColor: '#e8f2ed',
  paddingTop: '4.5rem',
  paddingBottom: '2rem',
  paddingLeft: 0,
  paddingRight: 0,
  marginLeft: 0,
  marginRight: 0,
  maxWidth: '100%',
  width: '100vw',
  minHeight: '100vh'
}

// eslint-disable-next-line
export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
      <Box sx={{...boxStyling}}>
        <Container maxWidth="lg">
          <Card  sx={{...cardMaterial}}>
            <CardContent>
                      <div className="section">
                        <Typography gutterBottom variant="h4" sx={{fontWeight: 'bold'}} component="div">
                          {title}
                        </Typography>
                        <PageContent className="content" content={content} />
                      </div>
            </CardContent>
          </Card>
        </Container>
      </Box>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
