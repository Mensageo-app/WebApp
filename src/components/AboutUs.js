import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useStyles } from '../style/HeaderStyle'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { FormattedMessage } from 'react-intl'
import Container from '@material-ui/core/Container'

const AboutUsContent = (props) => {
  return (
    <div>
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
    </div>
  )
}

const AboutUs = () => {
  const classes = useStyles()
  return <div className={classes.heroContent}>
    <Container>
      <div className={classes.heroTitle}>
        <Typography variant="h3" align="left" gutterBottom>
          <FormattedMessage id="aboutus.aboutus" defaultMessage="Missing String for aboutus.aboutus" />
        </Typography>
      </div>
      <div className={classes.heroButtons}>

        <AboutUsContent title="aboutus.vision.title" content="aboutus.vision.content" />
        <AboutUsContent title="aboutus.whoarewe.title" content="aboutus.whoarewe.content" />
        <AboutUsContent title="aboutus.contactus.title" content="aboutus.contactus.content" />

      </div>
    </Container>
  </div>
}

export default AboutUs
