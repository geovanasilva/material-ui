import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Planta from "../assets/planta.svg";
import Fechar from "../assets/fechar.svg";
import Chevron from "../assets/chevron.svg";

const useStyles = makeStyles((theme) => ({
  iconeFechar: {
    padding: "25px 0 0 35px",
  },
}));

export default function ItemPedido() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <img src={Planta} alt="Planta" />
        <Grid item xs={7}>
          <h4>Cordyline fruticosa</h4>
          <p>R$ 20,00</p>
        </Grid>
        <Grid item>
          <img src={Fechar} alt="Fechar" className={classes.iconeFechar} />
          <p>
            1 qtd <img src={Chevron} alt="Chevron" />
          </p>
        </Grid>
      </Grid>
      <hr />
    </div>
  );
}
