import SelectMenu from "./components/SelectMenu";
import DisplayMenu from "./components/DisplayMenu";
import "./App.css";
import { DataProvider } from "./contexts/DataContext.js";
import { Grid } from "@material-ui/core";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <DataProvider>
      <Grid container justify="center">
        <SelectMenu></SelectMenu>
        <DisplayMenu></DisplayMenu>
      </Grid>
    </DataProvider>
  );
}

export default App;
