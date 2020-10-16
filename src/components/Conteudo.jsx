import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import Carrinho from "./Carrinho";
import Formulario from "./Formulario";
import ResumoDoPedido from "./ResumoDoPedido";

const useStyles = makeStyles((theme) => ({
  botao: {
    borderRadius: 0,
    boxShadow: "10px 10px 30px rgba(255,203,71, 0.5)",
    color: "white",
    fontSize: 12,
    fontWeight: 700,
    height: 50,
    margin: "20px 20px 100px 0px",
    textTransform: "none",
    width: 200,
  },
}));

export default function Conteudo() {
  const classes = useStyles();
  return (
    <main>
      <Grid container spacing={3}>
        <Grid item xs={1}></Grid>
        <Grid container xs={8} direction="row" justify="space-between">
          <Grid item xs={6}>
            <Carrinho />
            <Formulario />
            <Button
              variant="contained"
              color="primary"
              className={classes.botao}
            >
              Finalizar Pagamento
            </Button>
          </Grid>
          <Grid item xs={2}>
            <ResumoDoPedido />
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </main>
  );
}
