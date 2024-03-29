import React from "react"
import {Link} from "gatsby";
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode
} from '@fortawesome/free-solid-svg-icons'

const upperTypography = {
  marginLeft: '0.5rem',
  marginTop: '0.25rem',
  flexGrow: '1'
}

const navbarStyle = {
  color: '#333',
  backgroundColor: '#fff'
}

export default function Navbar() {

  const title = "Ryan's Profile"
  return (
        <AppBar position='sticky' elevation={1} sx={{top: 0, width: '100%'}}>
          <Toolbar sx={{...navbarStyle}}>
            <FontAwesomeIcon icon={faCode} size="lg" style={{
              color: '#3ddc84',
              marginTop: '0.25rem'
            }} />
            <Typography variant="h5" component="div" sx={{...upperTypography}}>
              {title}
            </Typography>
            <div style={{marginLeft: "auto"}}>
              <Link to='/' >
                <Button variant={"outlined"} color={"secondary"} sx={{marginRight: '1rem'}} >Home</Button>
              </Link>
              <Link to='/blog' >
                <Button variant={"contained"} color={'secondary'} >Blog</Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
  );
}