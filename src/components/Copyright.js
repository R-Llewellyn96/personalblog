import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="left" style={{marginTop: '2rem'}}>
            {'Copyright © '}
            <MuiLink color="inherit" href="https://www.google.com/">
                Ryan Llewellyn
            </MuiLink>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}