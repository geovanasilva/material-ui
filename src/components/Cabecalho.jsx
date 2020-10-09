import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Logo from "../assets/logo.svg";
import { Breadcrumbs, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: "20px 0px",
  },
}));

export default function Cabecalho() {
  const classes = useStyles();
  return (
    <header>
      <Grid container spacing={3}>
        <Grid item xs={1}></Grid>
        <Grid
          container
          xs={8}
          direction="row"
          justify="space-between"
          alignItems="center"
          justifyContent="flex-end"
          className={classes.margin}
        >
          <Grid item xs={2}>
            <img src={Logo} alt="Logo" />
          </Grid>
          <Grid item xs={6}>
            <Breadcrumbs aria-label="breadcrumb">
              <Typography color="textPrimary">Como fazer</Typography>
              <Typography color="textPrimary">Ofertas</Typography>
              <Typography color="textPrimary">Depoimentos</Typography>
              <Typography color="textPrimary">Videos</Typography>
              <Typography color="textPrimary">Meu carrinho</Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </header>
  );
}
