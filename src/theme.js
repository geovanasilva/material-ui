import { createMuiTheme } from '@material-ui/core/styles';
import PlanoDeFundo from './assets/planodefundo.svg';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FFCB47'
        },
    },
    typography: {
        fontFamily: 'Montserrat',
        fontWeight: 400,
        h1: {
            fontFamily: 'Elsie Swash Caps',
            fontWeight: 900,
        },
        h2: {
            fontFamily: 'Elsie Swash Caps',
            fontWeight: 900,
        },
        h3: {
            fontFamily: 'Elsie Swash Caps',
            fontWeight: 900,
        },
        h4: {
            fontFamily: 'Elsie Swash Caps',
            fontWeight: 900,
        },
        h5: {
            fontFamily: 'Elsie Swash Caps',
            fontWeight: 900,
        }
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            backgroundImage: `url(${PlanoDeFundo})`,
            backgroundSize: 'cover',
          }
        }
      }
    }
});

export default theme;