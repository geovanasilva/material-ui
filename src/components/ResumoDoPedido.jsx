import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import ItemPedido from "./ItemPedido";

const useStyles = makeStyles((theme) => ({
  cartao: {
    minHeight: 500,
    minWidth: 400,
  },
  subtotal: {
    fontWeight: 900
  },
  resumoPedido: {
    fontSize: 25,
  }
}));

export default function ResumodePedido() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.cartao}>
        <CardContent>
          <Typography variant="h3" className={classes.resumoPedido}>
            Resumo do pedido
          </Typography>
          <ItemPedido />
          <ItemPedido />
          <ItemPedido />
          <Grid container>
            <Grid item xs={10}>
              <p>Valor dos produtos</p>
            </Grid>
            <Grid item>
              <p>R$60,00</p>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={10}>
              <p>Taxa de entrega</p>
            </Grid>
            <Grid item>
              <p>R$10,00</p>
            </Grid>
          </Grid>
          <Grid container className={classes.subtotal}>
            <Grid item xs={10}>
              <p>Subtotal</p>
            </Grid>
            <Grid item>
              <p>R$70,00</p>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
