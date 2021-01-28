import { createMuiTheme } from '@material-ui/core';
import { orange, purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#236024",
        },        
        secondary: purple,
    },
    status: {
        danger: orange
    }
});

export default theme;