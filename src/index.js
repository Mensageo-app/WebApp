import React from "react";
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {applyMiddleware, createStore} from "redux";

import App from "./components/App";
import reducers from "./reducers"
import thunk from "redux-thunk";
import {IntlProvider} from "react-intl";

import {MuiThemeProvider} from "@material-ui/core/styles";
import Theme from "./components/Theme";

// import messages_es from "./translations/es.json"; // use this to change to spanish
import messages_en from "./translations/en.json";

ReactDOM.render(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <MuiThemeProvider theme={Theme}>
            <IntlProvider locale="en" messages={messages_en}>
                <App/>
            </IntlProvider>
        </MuiThemeProvider>
    </Provider>,
    document.querySelector("#root")
);
