import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { FormattedMessage } from 'react-intl'
import Typography from '@material-ui/core/Typography'
import { useStyles } from '../../style/HeaderStyle'

const Information = ({ position }) => {
  const classes = useStyles()
  return (
    <div>
      <Card className={classes.fullHeightCard}>
        <CardContent>
          <Typography variant="h6" align="left">
            <FormattedMessage id={`information.${position}.title`} defaultMessage="Missing String" />
          </Typography>
          <div className={classes.fullHeightCard}>
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
      </Card>
    </div>
  )
}

export default Information
