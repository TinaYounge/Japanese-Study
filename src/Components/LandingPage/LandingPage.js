import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  Button,
  CardContent,
  Typography,
  CardActions,
  Card,
  ImageListItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "pink",
    borderRadius: "0",
    height: "80vh",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  card: {
    flexGrow: 1,
    backgroundColor: "red",
    borderRadius: "0",
    height: "60vh",
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <Paper className={classes.paper}>
            {" "}
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  hhhhh{" "}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper className={classes.paper}>
            {" "}
            <ImageListItem key="h" cols="ha" className={classes.style}>
              <img
                src="https://i.pinimg.com/564x/2c/11/5e/2c115e030865843fed0bd77e59dbafde.jpg"
                alt="hahah"
              />
            </ImageListItem>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
