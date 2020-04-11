import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {FormattedMessage} from "react-intl";

const BrandToolBar = () => {
    return <Toolbar>
        <Typography variant="h5">
            <FormattedMessage id="app.text" defaultMessage="Mensageo"/>
        </Typography>
    </Toolbar>
}

export default BrandToolBar;