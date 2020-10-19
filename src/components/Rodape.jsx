import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box } from "@material-ui/core";
import Logo from "../assets/logo.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import Footer from '../assets/footer.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Footer})`,
    height: "309px",
    padding: "50px 200px 0 200px",
  },
  iconesSociais: {
    marginTop: "20px",
    marginRight: "20px",
  },
}));

export default function Rodape() {
  const classes = useStyles();
  return (
    <footer>
      <Grid container justify="space-around" className={classes.root}>
        <Grid item>
          <img src={Logo} alt="Logo" />
          <Box>
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
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="body2">
            <Box fontWeight={400}>Rio de Janeiro</Box>
          </Typography>
          <Typography variant="body2">
            Rua Siqueira Campos, 171, 303 Copacabana
          </Typography>
          <Typography variant="body2">Telefone: (21) 99876-0099</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">
            <Box fontWeight={400}>São Paulo</Box>
          </Typography>
          <Typography variant="body2">
            Rua Anita Garibaldi, 33, 13 Sé
          </Typography>
          <Typography variant="body2">Telefone: (11) 99875-2201</Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
