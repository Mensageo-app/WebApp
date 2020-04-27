import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useStyles } from '../../style/InfoStyle'
import { FormattedMessage } from 'react-intl'
import Container from '@material-ui/core/Container'

const InfoTemplate = (props) => {
  const classes = useStyles()
  return <div className={classes.heroContent}>
    <Container>
      <div className={classes.heroTitle}>
        <Typography variant="h3" align="left" gutterBottom>
          <FormattedMessage id={props.title} defaultMessage="Missing String for title" />
        </Typography>
      </div>
      <div className={classes.heroButtons}>
        {props.children}
      </div>
    </Container>
  </div>
}

export default InfoTemplate
