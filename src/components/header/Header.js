import React from 'react'
import Information from './Information'
import { FormattedMessage } from 'react-intl'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { useStyles } from '../../style/HeaderStyle'

const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.heroContent}>
      <Container>
        <div className={classes.heroTitle}>
          <Typography variant="h3" align="left" gutterBottom>
            <FormattedMessage id="header.title" defaultMessage="Missing String for header.title" />
          </Typography>
        </div>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item md={6}>
              <Information position={'left'}>
                <div className={classes.fullHeightCard}>
                  <p>
                    <FormattedMessage id={'information.left.visualize'} defaultMessage=" " />
                  </p>
                  <p>
                    <FormattedMessage id={'information.left.learn'} defaultMessage=" " />
                  </p>
                  <p>
                    <FormattedMessage id={'information.left.deal'} defaultMessage=" " />
                  </p>
                </div>
              </Information>
            </Grid>
            <Grid item md={6}>
              <Information position={'right'}>
                <div className={classes.fullHeightCard}>
                  <p>
                    <FormattedMessage id={'information.right.visualize'} defaultMessage=" " />
                  </p>
                  <p>
                    <a target="_blank" rel="noopener noreferrer" href='https://docs.google.com/forms/d/e/1FAIpQLSfqfr2UlK82AzhgUyNKIGEdl4UZ-kYo_mEyLIcRq5AEqd7Jfg/viewform'>
                      <FormattedMessage id={'information.right.deal'} defaultMessage=" " />
                    </a>
                  </p>
                </div>
              </Information>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>

  )
}

export default Header
