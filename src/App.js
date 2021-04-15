import Register from './components/Register';
import Users from './components/Users'
import { MuiThemeProvider } from "@material-ui/core/styles";
import {theme} from './theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      {/* <Register /> */}
      <Users />
    </MuiThemeProvider>
  );
}

export default App;
