import {createMuiTheme} from "@material-ui/core/styles";

const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#2196F3",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#333"
        },
        backgroundColor: "#2196F3",
        backgroundMain: 'linear-gradient(90deg, #2196F3 0%, #2092D1 100%)',
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.24)",
    },
    typography: {
        // fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 500,
        letterSpacing: "1.25px",
        h5: {
            textTransform: "uppercase"
        },
        h6: {
            color: "#2196F3"
        }
    },
    mixins: {
        toolbar: {
            minHeight: 64,
            backgroundColor: "#2196F3",
            background: 'linear-gradient(90deg, #2196F3 0%, #2092D1 100%)',
            color: "#ffffff",
            paddingLeft: "13%", // this should be removed
        }
    },
});

export default customTheme;
