import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import { ListItemText, Divider } from '@material-ui/core'
import { useStyles } from '../style/FooterStyle'
import { FormattedMessage } from 'react-intl'

const Footer = () => {
  const classes = useStyles()

  function FooterListElement (props) {
    return (
      <ListItemText className={classes.footerListItemStyle}>
        <Typography variant="h6" align="left">
          <Link color="textPrimary" href={props.href}>
            <FormattedMessage id={props.idMessage} defaultMessage="Missing String" />
          </Link>
        </Typography>
      </ListItemText>
    )
  }

  return (
    <footer className={classes.footer}>
      <Divider className={classes.dividerStyle} />
      <List className={classes.footerListStyle}>
        <FooterListElement idMessage="footer.feedback" href="/Feedback" />
        <FooterListElement idMessage="footer.aboutus" href="/Aboutus" />
        <FooterListElement idMessage="footer.joinus" href="/Joinus" />
      </List>
    </footer>
  )
}

export default Footer
