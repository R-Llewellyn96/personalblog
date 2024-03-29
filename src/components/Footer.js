import React from "react"
import {Container, Divider, Grid, IconButton, Typography} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin, faTwitter
} from '@fortawesome/free-brands-svg-icons'
import theme from "../theme";
import Copyright from "./Copyright";


const socialMediaIconStyling = {
  paddingLeft: 0,
  paddingRight: 0,
  marginLeft: 0,
  marginRight: 0,
  color: '#333',
  "&:hover": {
    color: theme.palette.secondary.main,
    backgroundColor: 'transparent',
  },
}

const containerStyling = {
  paddingLeft: 0,
  paddingRight: 0,
  marginLeft: 0,
  marginRight: 0,
  paddingTop: '1rem',
  paddingBottom: '1rem'
}

const iconLinkStyling = {
  paddingLeft: 0,
  paddingRight: 0,
  marginLeft: 0,
  marginRight: 0,
  marginTop: '0rem'
}

export default function Footer() {

  return (
        <Container maxWidth='false' sx={{...containerStyling}}>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={6}>

              <Grid container spacing={5}>
                <Grid item xs={8} sm={9} md={4} lg={3}>
                  <Typography
                      component="h5"
                      variant="h5"
                      align="left"
                      fontWeight={"normal"}
                      gutterBottom
                      sx={{
                        marginTop: '0.5rem'
                      }}
                  >
                    Follow Me
                  </Typography>
                </Grid>

                {/*div container for icon links*/}
                <Grid item xs={1} sx={{...iconLinkStyling}}>
                  <IconButton aria-label="Twitter" href="https://twitter.com/RLlewellyn96" sx={{...socialMediaIconStyling,
                    "&:hover": {
                      color: '#1DA1F2',
                      backgroundColor: 'transparent'
                    }
                  }}>
                    <FontAwesomeIcon icon={faTwitter} size="lg"/>
                  </IconButton>
                </Grid>
                <Grid item xs={1} sx={{...iconLinkStyling}}>
                  <IconButton aria-label="GitHub" href="https://github.com/R-Llewellyn96" sx={{...socialMediaIconStyling,
                    "&:hover": {
                      color: '#4078c0',
                      backgroundColor: 'transparent'
                    }
                  }}>
                    <FontAwesomeIcon icon={faGithub} size="lg"/>
                  </IconButton>
                </Grid>
                <Grid item xs={1} sx={{...iconLinkStyling}}>
                  <IconButton aria-label="Linkedin" href="https://www.linkedin.com/in/rllewellyn96" sx={{...socialMediaIconStyling,
                    "&:hover": {
                      color: '#0A66C2',
                      backgroundColor: 'transparent'
                    }
                  }}>
                    <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                  </IconButton>
                </Grid>

              </Grid>

            </Grid>
            <Grid item xs={6}>
            </Grid>
          </Grid>

          {/* End Social Media Links */}
          <Divider />

          {/* Import Copyright component */}
          <Copyright />

        </Container>
  )
}