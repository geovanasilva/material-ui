import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box } from "@material-ui/core";
import Logo from "../assets/logo.svg";
import Jardineira from "../assets/jardineira.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '30px',
    background: "white",
  },
  jardineira: {
    position: "relative",
    left: "30px",
    bottom: "100px",
  },
  iconesSociais: {
    marginTop: '20px',
    marginRight: '20px'
  }
}));

export default function Rodape() {
  const classes = useStyles();
  return (
    <footer>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <img src={Logo} alt="Logo" />
          <Box>
            <img src={Facebook} alt="Facebook" className={classes.iconesSociais}/>
            <img src={Twitter} alt="Twitter" className={classes.iconesSociais}/>
            <img src={Instagram} alt="Instagram" className={classes.iconesSociais}/>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2">
            <Box fontWeight={400}>Rio de Janeiro</Box>
          </Typography>
          <Typography variant="body2">
            Rua Siqueira Campos, 171, 303 Copacabana
          </Typography>
          <Typography variant="body2">Telefone: (21) 99876-0099</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2">
            <Box fontWeight={400}>São Paulo</Box>
          </Typography>
          <Typography variant="body2">
            Rua Anita Garibaldi, 33, 13 Sé
          </Typography>
          <Typography variant="body2">Telefone: (11) 99875-2201</Typography>
        </Grid>
        <Grid item xs={2} className={classes.jardineira}>
          <img src={Jardineira} alt="Jardineira" />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </footer>
  );
}
