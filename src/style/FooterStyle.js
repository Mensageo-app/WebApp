import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  footerListStyle: {
    display: 'inline-flex',
    flexDirection: 'row',
    marginTop: '2em'
  },
  footerListItemStyle: {
    display: 'block',
    marginRight: '2em'
  },
  footer: {
    padding: theme.spacing(6)
  },
  dividerStyle: {
    borderTop: '2px solid #2196F3',
    marginTop: '79px'
  }
}))
