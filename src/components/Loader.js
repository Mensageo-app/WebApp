import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import { FormattedMessage } from 'react-intl'

const Loader = () => {
  return (
    <div>
      <Typography variant="h4" align="center">
        <CircularProgress /> <FormattedMessage id="loader.text" defaultMessage="Loading ..." />
      </Typography>
    </div>
  )
}

export default Loader
