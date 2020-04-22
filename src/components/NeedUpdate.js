import React from 'react'
import Typography from '@material-ui/core/Typography'
import { FormattedMessage } from 'react-intl'
import Box from '@material-ui/core/Box'

const NeedUpdates = () => {
  return (
    <Box component="div" m={6}>
      <Typography variant="h4" align="center">
        <FormattedMessage id="need.update.title" defaultMessage="missing string need.update.title" />
      </Typography>
      <Typography variant="body1" align="center">
        <FormattedMessage id="need.update.last" defaultMessage="missing string need.update.title" />
        {new Date().toLocaleString()}
      </Typography>
    </Box>
  )
}

export default NeedUpdates
