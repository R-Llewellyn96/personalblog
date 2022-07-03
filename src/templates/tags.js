import * as React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import {Box, Button, Container, ListItem, Typography} from "@mui/material";
import Chip from "@mui/material/Chip";
import {chipStylingGreen} from "../styling/myCustomStylingComponents";

class TagRoute extends React.Component {
  render() {

    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map((post) => (

        <ListItem key={post.node.fields.slug}>
          <Link to={post.node.fields.slug}>
            <Chip
                label={post.node.frontmatter.title}
                sx={{...chipStylingGreen}}
            />
          </Link>
        </ListItem>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

    const boxStyling = {
      backgroundColor: '#e8f2ed',
      paddingTop: '8rem',
      paddingLeft: 0,
      paddingRight: 0,
      marginLeft: 0,
      marginRight: 0,
      maxWidth: '100%',
      width: '100vw',
      minHeight: '90vh'
    }

    return (
      <Layout>
        <Box sx={{...boxStyling}}>
          <Container sx={{ paddingBottom: '4rem'}} maxWidth="lg">
            <section className="section">
              <Helmet title={`${tag} | ${title}`} />
              <div className="container content">
                <div className="columns">
                  <div
                      className="column is-10 is-offset-1"
                      style={{ marginBottom: "6rem" }}
                  >
                    <Typography variant="h5" align="left" paragraph>
                      {tagHeader}
                    </Typography>
                    <ul className="taglist">{postLinks}</ul>

                    <Link to="/tags/">
                      <Button variant="contained" size={"large"} sx={{...chipStylingGreen, marginTop: '0.5rem', borderRadius: '25px'}}
                      >BROWSE ALL TAGS</Button>
                    </Link>

                  </div>
                </div>
              </div>
            </section>
          </Container>
        </Box>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
