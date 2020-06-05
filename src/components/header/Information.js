import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { FormattedMessage } from 'react-intl'
import Typography from '@material-ui/core/Typography'
import { useStyles } from '../../style/HeaderStyle'

const Information = (props) => {
  const classes = useStyles()
  const { position, children } = props
  return (
    <Card className={classes.fullHeightCard}>
      <CardContent>
        <Typography variant="h6" align="left">
          <FormattedMessage id={`information.${position}.title`} defaultMessage="Missing String" />
        </Typography>

        { children }

      </CardContent>
    </Card>
  )
}

export default Information
