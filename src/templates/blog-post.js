import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import {Container, Typography} from "@mui/material";
import { nameStyle } from "../styling/myCustomStylingComponents";
import Chip from "@mui/material/Chip";
import theme from "../theme";

// eslint-disable-next-line
export const BlogPostTemplate = ({
                                   content,
                                   contentComponent,
                                   description,
                                   tags,
                                   title,
                                   helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
      <Container maxWidth="md">
          <section className="section">
              {helmet || ""}
              <div className="container content">
                  <div className="columns">
                      <div className="column is-10 is-offset-1">

                          <Typography gutterBottom variant="h4" component="div" align="center" style={{...nameStyle, marginTop: '8rem'}}>
                              {title}
                          </Typography>

                          <Typography gutterBottom variant="subtitle1" component="div" align="center" sx={{fontSize: '125%', marginBottom: '1rem'}} >
                              {description}
                          </Typography>

                          <PostContent content={content} />

                          {tags && tags.length ? (
                              <div style={{ marginTop: `4rem` }}>

                                  <Typography gutterBottom variant="h5" component="div" align="left" style={{...nameStyle}}>
                                      Tags
                                  </Typography>

                                  <ul className="taglist" style={{marginBottom: '4rem'}}>
                                      {tags.map((tag) => (
                                          <li key={tag + `tag`}>
                                              <Link to={`/tags/${kebabCase(tag)}/`}>
                                                  <Chip
                                                      label={tag}
                                                      sx={{
                                                          marginBottom: '0.25rem',
                                                          color: '#fff',
                                                          backgroundColor: theme.palette.primary.main,
                                                          fontSize: '80%',
                                                          '&:hover': {
                                                              color: '#fff',
                                                              backgroundColor: theme.palette.primary.dark,
                                                          }
                                                  }}
                                                  />
                                              </Link>
                                          </li>
                                      ))}
                                  </ul>
                              </div>
                          ) : null}
                      </div>
                  </div>
              </div>
          </section>
      </Container>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  absolutePath: PropTypes.string
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
