import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureMockStore from 'redux-mock-store';
import {Provider} from "react-redux";
const mockStore = configureMockStore();

it("renders without errors", () => {
    const store = mockStore({});
    const div = document.createElement("div");
    ReactDOM.render(<Provider store={store}><App /></Provider>, div)
})
