import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import { FormattedMessage } from 'react-intl'

const InfoModalTemplate = (props) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (<Dialog
    fullScreen={fullScreen}
    open={props.open}
    onClose={props.handleClose}
    aria-labelledby="responsive-dialog-title"
  >

    <DialogContent>
      {props.children}
    </DialogContent>
    <DialogActions>
      <Button onClick={props.handleClose} color="primary" autoFocus>
        <FormattedMessage id="dialog.close" defaultMessage="Missing String" />
      </Button>
    </DialogActions>
  </Dialog>
  )
}

export default InfoModalTemplate
