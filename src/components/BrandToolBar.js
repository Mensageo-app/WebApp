import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { FormattedMessage } from 'react-intl'
import Link from '@material-ui/core/Link'

const BrandToolBar = () => {
  return <Toolbar>
    <Typography variant="h5">
      <Link href="/" color="inherit">
        <FormattedMessage id="app.text" defaultMessage="Mensageo" />
      </Link>
    </Typography>
  </Toolbar>
}

export default BrandToolBar
