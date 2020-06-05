import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  heroContent: {
    background: theme.palette.backgroundMain,
    padding: theme.spacing(2, 0, 6),
    color: '#ffffff',
    mixBlendMode: 'normal',
    boxShadow: theme.palette.boxShadow
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    color: '#ffffff'
  },
  heroTitle: {
    width: '70%'
  },
  fullHeightCard: {
    height: '100%',
    minHeight: '140px'
  }
}))
