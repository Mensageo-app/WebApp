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
    paddingTop: '56.25%', // 16:9
    padding: '15%',
    backgroundSize: 'contain !important',
    margin: '0 auto'
  },
  cardContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  typography: {
    // fontFamily: "Roboto",
    fontStyle: 'normal',
    fontWeight: 500,
    letterSpacing: '1.25px',
    h8: {
      fontWeight: 'fontWeightBold'
    },
    h6: {
      color: '#2196F3'
    },
    h9: {
      color: '#808080'
    }
  }
}))
