import React from "react";
import { Box } from "@material-ui/core";
import Planta from "../assets/planta.svg";
import Fechar from "../assets/fechar.svg";
import Chevron from "../assets/chevron.svg";

export default function ItemPedido() {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <img src={Planta} alt="Planta" />
        <Box>
          <h4>Cordyline fruticosa</h4>
          <p>R$ 20,00</p>
        </Box>
        <Box>
          <img src={Fechar} alt="Fechar" />
          <p>
            1 qtd <img src={Chevron} alt="Chevron" />
          </p>
        </Box>
      </Box>
      <hr />
    </div>
  );
}
