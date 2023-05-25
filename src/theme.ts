import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#7789EA',
        },
        background:{
            paper:'#28292B',
            default:'#212224'
        }
    },
});

theme = responsiveFontSizes(theme);

export default theme;
