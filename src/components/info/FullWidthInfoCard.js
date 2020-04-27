import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { FormattedMessage } from 'react-intl'
import Box from '@material-ui/core/Box'

const FullWidthInfoCard = (props) => {
  return (
    <div>
      <Box m={2}>
        <Card>
          <CardContent>
            <Typography variant="h6" align="left">
              <FormattedMessage id={props.title} defaultMessage="Missing String" />
            </Typography>
            <div>
              <p>
                <FormattedMessage id={props.content} defaultMessage="Missing String" />
              </p>
            </div>
          </CardContent>
        </Card>
      </Box>
    </div>
  )
}

export default FullWidthInfoCard
