import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  footerListStyle: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
  },
  footer: {
    padding: theme.spacing(6),
  },
  dividerStyle: {
    borderTop: "2px solid #2196F3",
  },
}));
