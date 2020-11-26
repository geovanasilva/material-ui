import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Logo from "../assets/logo.svg";
import { Breadcrumbs, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margem: {
    margin: "20px 0",
  },
}));

export default function Cabecalho() {
  const classes = useStyles();
  return (
    <header>
      <Grid
        container
        justify="space-around"
        alignItems="center"
        className={classes.margem}
      >
        <Grid item>
          <img src={Logo} alt="Logo" />
        </Grid>
        <Grid item>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="textPrimary">Como fazer</Typography>
            <Typography color="textPrimary">Ofertas</Typography>
            <Typography color="textPrimary">Depoimentos</Typography>
            <Typography color="textPrimary">Videos</Typography>
            <Typography color="textPrimary">Meu carrinho</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>
    </header>
  );
}
