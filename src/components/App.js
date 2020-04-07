import React from "react";
import {FormattedMessage} from 'react-intl';

class App extends React.Component {

    render() {
        return <div><FormattedMessage id="app.text"
                                      defaultMessage="Mensageo"/></div>
    }
}

export default App;