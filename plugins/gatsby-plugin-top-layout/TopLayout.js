import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../src/theme';
import useSiteMetadata from "../../src/components/SiteMetadata";

export default function TopLayout(props) {
    const { title, description } = useSiteMetadata();
    return (
        <React.Fragment>
            <Helmet htmlAttributes={{ lang: 'en-GB' }}>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="DNS-prefetch" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com/"/>
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin/>
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </React.Fragment>
    );
}

TopLayout.propTypes = {
    children: PropTypes.node,
};