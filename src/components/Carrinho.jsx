import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Avatar, Box } from "@material-ui/core";
import Carrinho from "../assets/carrinho.svg";

const useStyles = makeStyles((theme) => ({
  carrinhoInfo: {
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(2),
    width: 600,
  },
  opacidade: {
    opacity: 0.5,
  },
  primeiroTituloMargin: {
    marginTop: theme.spacing(6),
  },
}));

export default function Form() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h3" className={classes.primeiroTituloMargin}>
        <Box fontSize={30}>Finalizar pedido</Box>
      </Typography>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        wrap="nowrap"
        spacing={3}
        className={classes.carrinhoInfo}
      >
        <Grid item>
          <Avatar src={Carrinho} />
        </Grid>
        <Grid item>
          <Typography className={classes.opacidade}>
            <Box fontSize={14}>
              Insira suas informações abaixo e você receberá um e-mail com os
              detalhes da sua compra. Assim que o pagamento for processado você
              receberá seu produto em sua casa em até 7 dias úteis.
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
