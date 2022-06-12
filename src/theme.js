import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    typography: {
        fontFamily: [
            'Cabin',
            'Roboto',
            'Arial',
            '"Helvetica Neue"',
        ].join(','),
    },
    palette: {
        primary: {
            main: '#556cd6',
            dark: '#283fa4'
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        text: {
            primary: '#333'
        }
    },
});

export default theme;