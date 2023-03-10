import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import theme from "./theme/theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {ModalState} from "./context/ModalContext";
import {setupStore} from "./store/store";
import {Provider} from "react-redux";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

serviceWorkerRegistration.register();


const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
    root.render(
        <ThemeProvider theme={theme}>

            <BrowserRouter>
                <Provider store={store}>
                    <CssBaseline/>
                    <App></App>
                    {/*<ModalState>/*/}
                    {/*    <App></App>*/}
                    {/*</ModalState>*/}
                </Provider>
            </BrowserRouter>
        </ThemeProvider>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
