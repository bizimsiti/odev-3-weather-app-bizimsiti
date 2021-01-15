import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px",
    width: "140px",
    "&:hover": {
      boxShadow:
        "0 30px 30px rgba(0, 0, 0, 0.19), 0 10px 10px rgba(0, 0, 0, 0.23)",
    },
    backgroundColor: "#cec5fa",
  },
  media: {
    margin: "0 auto",
    width: 50,
    height: 50,
    borderRadius: "4px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    position: "relative",
    zIndex: 1000,
    backgroundColor: "white",
  },
  header: {
    color: "#fef1d2",
  },
  typographyFont: {
    color: "#fef1d2",
  },
  today: {
    backgroundColor: "black",
  },
}));

function Cards({ days }) {
  const classes = useStyles();
  var weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(days.valid_date);
  const today = weekDays[date.getDay()];
  console.log(today);
  return (
    <Card className={`${classes.root}`}>
      <CardHeader className={classes.header} title={days.temp} />
      <CardMedia
        className={classes.media}
        image={`https://www.weatherbit.io/static/img/icons/${days.weather.icon}.png`}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" component="div">
          {today}
        </Typography>
        <Typography
          className={classes.typographyFont}
          variant="body1"
          component="div"
        >
          min:{days.min_temp}
        </Typography>
        <Typography
          className={classes.typographyFont}
          variant="body1"
          component="div"
        >
          max:{days.max_temp}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Cards;
