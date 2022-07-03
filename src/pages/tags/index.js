import * as React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import {Box, Container, ListItem, Typography} from "@mui/material";
import Chip from "@mui/material/Chip";
import {chipStylingGreen} from "../../styling/myCustomStylingComponents";

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

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Box sx={{...boxStyling}}>
      <Container sx={{ paddingBottom: '4rem'}} maxWidth="lg">
        <section className="section">
          <Helmet title={`Tags | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                  className="column is-10 is-offset-1"
                  style={{ marginBottom: "6rem" }}
              >
                <Typography variant="h4" align="left" paragraph>
                  Tags
                </Typography>
                <ul className="taglist">
                  {group.map((tag) => (
                      <ListItem key={tag.fieldValue}>
                        <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                          <Chip
                              label={`${tag.fieldValue} (${tag.totalCount})`}
                              sx={{...chipStylingGreen}}
                          />
                        </Link>
                      </ListItem>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Box>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
