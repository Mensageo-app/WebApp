import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import { ListItemText, Divider } from '@material-ui/core'
import { useStyles } from '../style/FooterStyle'

const Footer = () => {
  const classes = useStyles()

  function FooterListElement (props) {
    return (
      <ListItemText>
        <Typography variant="h6">
          <Link color="textPrimary" href={props.href}>
            {props.text}
          </Link>
        </Typography>
      </ListItemText>
    )
  }

  return (
    <footer className={classes.footer}>
      <Divider className={classes.dividerStyle} />
      <List className={classes.footerListStyle}>
        <FooterListElement text="Feedback" href="/Feedback" />
        <FooterListElement text="About us" href="/Aboutus" />
        <FooterListElement text="Join Us" href="/Joinus" />
      </List>
    </footer>
  )
}

export default Footer
