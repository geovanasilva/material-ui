import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
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
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <img src={Planta} alt="Planta" />
        <Box>
          <h4>Cordyline fruticosa</h4>
          <p>R$ 20,00</p>
        </Box>
        <Box>
          <img src={Fechar} alt="Fechar" className={classes.iconeFechar} />
          <p>
            1 qtd <img src={Chevron} alt="Chevron" />
          </p>
        </Box>
      </Box>
      <hr />
    </div>
  );
}
