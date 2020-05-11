import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import { FormattedMessage } from 'react-intl'
import Typography from '@material-ui/core/Typography'

const Information = ({ position }) => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h6" align="left">
            <FormattedMessage id={`information.${position}.title`} defaultMessage="Missing String" />
          </Typography>
          <div>
            <p>
              <FormattedMessage id={`information.${position}.visualize`} defaultMessage=" " />
            </p>
            <p>
              <FormattedMessage id={`information.${position}.learn`} defaultMessage=" " />
            </p>
            <p>
              <FormattedMessage id={`information.${position}.deal`} defaultMessage=" " />
            </p>
          </div>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" size="small">
            <FormattedMessage id={`information.${position}.button`} defaultMessage="Locate" />
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Information
