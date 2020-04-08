import React from "react";
import {FormattedMessage} from 'react-intl'
import CategoryList from "./categories/CategoryList";
import history from "../history";

import {Router, Switch, Route} from 'react-router-dom'


const App = () => {
    return (
        <div>
            <FormattedMessage id="app.text" defaultMessage="Mensageo"/>
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Switch>
                            <Route path="/" exact component={CategoryList}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        </div>
    )
}

export default App;