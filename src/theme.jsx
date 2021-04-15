import { createMuiTheme } from '@material-ui/core/styles';
import {red, yellow, green} from '@material-ui/core/colors';

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: red[100],
      },
      secondary: {
        main: yellow[900],
      },
      // type: "dark"
    },
    typography: {
      fontSize: 16,
    },

    overrides: {
        MuiButton: {
          text: {
            background: 'linear-gradient(45deg, #001232 30%, #FF8E53 90%)',
            borderRadius: 30,
            border: 0,
            color: 'white !important',
            height: 48,
            padding: '0 30px',
            boxShadow: 'none',
            textTransform: "capitalize"
          },
        },
    },

   
    
    
  });