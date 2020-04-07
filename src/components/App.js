import React from "react";
import {FormattedMessage} from 'react-intl'
import CategoryList from "./categories/CategoryList";


class App extends React.Component {

    render() {
        return <div>
            <FormattedMessage id="app.text" defaultMessage="Mensageo"/>
            <CategoryList/>
        </div>
    }
}

export default App;