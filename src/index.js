import React from "react";
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {applyMiddleware, createStore} from "redux";

import App from "./components/App";
import reducers from "./reducers"
import thunk from "redux-thunk";
import {IntlProvider} from "react-intl";

// import messages_es from "./translations/es.json"; // use this to change to spanish
import messages_en from "./translations/en.json";

ReactDOM.render(
    <IntlProvider locale="en" messages={messages_en}>
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <App/>
        </Provider>
    </IntlProvider>,
    document.querySelector("#root")
);
