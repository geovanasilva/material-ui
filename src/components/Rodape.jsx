import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
}));

export default function Rodape() {
  const classes = useStyles();
  return (
    <footer>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={1}></Grid>
        <Grid item xs={8}>
          <Typography variant="h3">Footer</Typography>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </footer>
  );
}
