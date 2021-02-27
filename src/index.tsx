import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CustomTheme} from "./theme";
import {ThemeProvider} from "theme-ui";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={CustomTheme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
