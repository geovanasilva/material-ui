import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Logo from "../assets/logo.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  rodape: {
    background: "white",
    height: "250px",
    padding: "50px 200px 0 200px",
  },
  iconesSociais: {
    marginRight: "20px",
    marginTop: "20px",
  },
}));

export default function Rodape() {
  const classes = useStyles();
  return (
    <footer>
      <Grid container justify="space-around" className={classes.rodape}>
        <Grid item>
          <img src={Logo} alt="Logo" />
          <Grid>
            <img
              src={Facebook}
              alt="Facebook"
              className={classes.iconesSociais}
            />
            <img
              src={Twitter}
              alt="Twitter"
              className={classes.iconesSociais}
            />
            <img
              src={Instagram}
              alt="Instagram"
              className={classes.iconesSociais}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body1">Rio de Janeiro</Typography>
          <Typography variant="body2">Rua Siqueira Campos, 171, 303</Typography>
          <Typography variant="body2">Copacabana</Typography>
          <Typography variant="body2">Telefone: (21) 99876-0099</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">São Paulo</Typography>
          <Typography variant="body2">Rua Anita Garibaldi, 33, 13</Typography>
          <Typography variant="body2">Sé</Typography>
          <Typography variant="body2">Telefone: (11) 99875-2201</Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
