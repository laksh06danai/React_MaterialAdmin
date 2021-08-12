import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import MainComponent from './components/MainComponent';
import Themes from "./themes";
import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Themes.default}>
        <CssBaseline />
        <MainComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
