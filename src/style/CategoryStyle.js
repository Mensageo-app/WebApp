import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);',
    borderRadius: '4px'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}))
