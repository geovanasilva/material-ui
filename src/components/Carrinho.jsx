import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Avatar, Box } from "@material-ui/core";
import Carrinho from "../assets/carrinho.svg";

const useStyles = makeStyles((theme) => ({
  carrinhoInfo: {
    alignItems: 'center',
    display: 'flex',
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(2),
    width: 550,
  },
  carrinhoContainer: {
    alignItems: 'center',
    background: '#FFCB47',
    borderRadius: '50%',
    display: 'flex',
    height: '40px',
    justifyContent: 'center',
    marginRight: theme.spacing(2),
    width: '110px',
  },
  carrinho: {
    borderRadius: 0,
    height: '20px',
    width: '20px',
  },
  opacidade: {
    opacity: 0.5,
  },
  primeiroTitulo: {
    marginTop: theme.spacing(6),
  },
}));

export default function Form() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h3" className={classes.primeiroTitulo}>
        <Box fontSize={30}>Finalizar pedido</Box>
      </Typography>
      <Grid
        container
        direction="row"
        wrap="nowrap"
        className={classes.carrinhoInfo}
      >
        <Grid item className={classes.carrinhoContainer}>
          <Avatar src={Carrinho} className={classes.carrinho}></Avatar>
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
