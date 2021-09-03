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
import Temple from "../../images/Temple.png";
import Street from "../../images/Street.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "			",
    borderRadius: "0",
    // height: "80vh",
  },

  card: {
    flexGrow: 1,
    border: "0",
    marginTop: "30px",
  },
  img: {
    display: "flex",
    justifyContent: "center",
    width: "100",
  },
  text: {
    color: "#B22222",
    fontWeight: "bold",
    textAlign: "center",
    padding: theme.spacing(2),
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <Card className={classes.card}>
            <CardContent className={classes.text}>
              <Typography variant="h4" component="h2" className={classes.text}>
                Học tiếng nhật
              </Typography>

              <Typography variant="body2" component="p">
                well meaning and kindly.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Đăng kí theo dõi</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <ImageListItem key="Subheader" cols={2} className={classes.img}>
            <img src={Street} alt="tokyo here" />
          </ImageListItem>
        </Grid>
      </Grid>
    </div>
  );
}
