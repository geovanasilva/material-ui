import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Avatar } from "@material-ui/core";
import Carrinho from "../assets/carrinho.svg";

const useStyles = makeStyles((theme) => ({
  carrinhoContainer: {
    alignItems: 'center',
    display: 'flex',
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(2),
    width: 550,
  },
  iconeCarrinhoContainer: {
    alignItems: 'center',
    background: '#FFCB47',
    borderRadius: '50%',
    display: 'flex',
    height: '40px',
    justifyContent: 'center',
    marginRight: theme.spacing(2),
    width: '110px',
  },
  iconeCarrinho: {
    borderRadius: 0,
    height: '20px',
    width: '20px',
  },
  descricaoCarrinho: {
    fontSize: 14,
    opacity: 0.5,
  },
  primeiroTitulo: {
    marginTop: theme.spacing(6),
    fontSize: 30,
  },
}));

export default function Form() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h3" className={classes.primeiroTitulo}>
        Finalizar pedido
      </Typography>
      <Grid
        container
        direction="row"
        wrap="nowrap"
        className={classes.carrinhoContainer}
      >
        <Grid item className={classes.iconeCarrinhoContainer}>
          <Avatar src={Carrinho} className={classes.iconeCarrinho}></Avatar>
        </Grid>
        <Grid item>
          <Typography className={classes.descricaoCarrinho}>
              Insira suas informações abaixo e você receberá um e-mail com os
              detalhes da sua compra. Assim que o pagamento for processado você
              receberá seu produto em sua casa em até 7 dias úteis.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
