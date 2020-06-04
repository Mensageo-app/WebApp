import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import { ListItemText, Divider } from '@material-ui/core'
import { useStyles } from '../style/FooterStyle'
import { FormattedMessage } from 'react-intl'
import Feedback from './info/Feedback'
import JoinUs from './info/JoinUs'

const Footer = () => {
  const classes = useStyles()
  const [openFeedback, setOpenFeedback] = useState(false)
  const [openJoinUs, setOpenJoinUs] = useState(false)

  const handleClickOpenFeedBack = (e) => {
    e.preventDefault()
    setOpenFeedback(true)
  }

  const handleClickCloseFeedBack = () => {
    setOpenFeedback(false)
  }

  const handleClickOpenJoinUs = (e) => {
    e.preventDefault()
    setOpenJoinUs(true)
  }

  const handleClickCloseJoinUs = () => {
    setOpenJoinUs(false)
  }

  function FooterListElement (props) {
    return (
      <ListItemText className={classes.footerListItemStyle} onClick={props.onClick}>
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
        <FooterListElement idMessage="footer.feedback" href="#" onClick={handleClickOpenFeedBack} />
        <FooterListElement idMessage="footer.aboutus" href="/#/aboutus" />
        <FooterListElement idMessage="footer.joinus" href="#" onClick={handleClickOpenJoinUs} />
      </List>
      <Feedback open={openFeedback} handleClose={handleClickCloseFeedBack} />
      <JoinUs open={openJoinUs} handleClose={handleClickCloseJoinUs} />

    </footer>
  )
}

export default Footer
