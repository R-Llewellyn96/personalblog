import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, Typography} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons/faArrowRightLong";
import theme from "../theme";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import placeholder_img from "../img/placeholder_img.png"

class BlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
        <Grid container spacing={2}>
          {posts &&
              posts.map(({ node: post }) => (

                  <Grid item key={post.id} xs={12} sm={6} md={4}>
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

                        {post.frontmatter.featuredimage ? (
                                <div className="featured-thumbnail">
                                  <PreviewCompatibleImage
                                      imageInfo={{
                                        image: post.frontmatter.featuredimage,
                                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                        width:
                                        post.frontmatter.featuredimage.childImageSharp
                                            .gatsbyImageData.width,
                                        height:
                                        post.frontmatter.featuredimage.childImageSharp
                                            .gatsbyImageData.height,
                                      }}
                                  />
                                </div>
                        ) :
                        <CardMedia
                            component="img"
                            image={placeholder_img}
                            alt={'Placeholder Image'}
                        />
                        }


                        <CardContent sx={{ flexGrow: 1 }}>

                          <Typography sx={{ color: '#073042', marginBottom: '1rem'}} variant="h5" fontSize={22} >
                            {post.frontmatter.title}
                          </Typography>

                          <Typography sx={{ color: '#073042'}} gutterBottom variant="subtitle2" fontWeight={'normal'} >
                            {post.excerpt}
                          </Typography>

                        </CardContent>

                        <CardActions sx={{ marginBottom: '1rem'}}>

                          <Typography sx={{
                            color: '#073042',
                            marginLeft: '0.75rem',
                            flex: 1
                          }} gutterBottom variant="subtitle1" fontWeight={'normal'} >
                            By Ryan Llewellyn - {post.frontmatter.date}
                          </Typography>

                            <IconButton aria-label="card-link" component={Link} to={post.fields.slug} sx={{
                              color: '#073042',
                              "&:hover": {
                                color: theme.palette.primary.main,
                                backgroundColor: 'transparent',
                              },
                            }}>
                              <FontAwesomeIcon icon={faArrowRightLong} size="lg" />
                            </IconButton>

                        </CardActions>
                      </CardActionArea>
                    </Card>
                  </Grid>
              ))}
        </Grid>

    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 140)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 570
                        height: 360
                        quality: 100
                        layout: CONSTRAINED
                      )

                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
