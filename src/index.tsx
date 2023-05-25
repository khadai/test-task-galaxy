import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import {ThemeProvider as MuiThemeProvider} from '@mui/material/styles';
import theme from "./theme";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {CssBaseline} from "@mui/material";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <App/>
            <CssBaseline/>
        </MuiThemeProvider>
    </React.StrictMode>
);

