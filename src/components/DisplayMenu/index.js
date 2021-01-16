import { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import Cards from "../Cards";
import { Grid } from "@material-ui/core";
function DisplayMenu() {
  const { data } = useContext(DataContext);
  return (
    <>
      <Grid container xs={12} justify="center" item>
        {data.map((days) => (
          <Grid key={Math.random() * 1000} item>
            <Cards days={days}></Cards>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default DisplayMenu;
