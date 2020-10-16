import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Box } from "@material-ui/core";
import ItemPedido from "./ItemPedido";

const useStyles = makeStyles((theme) => ({
  cartao: {
    minHeight: 500,
    minWidth: 400,
  },
}));

export default function ResumodePedido() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.cartao}>
        <CardContent>
          <Typography variant="h3">
            <Box fontSize={20}>Resumo do pedido</Box>
          </Typography>
          <ItemPedido />
          <ItemPedido />
          <ItemPedido />
          <Box display="flex" justifyContent="space-between">
            <p>Valor dos produtos</p>
            <p>R$60,00</p>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <p>Taxa de entrega</p>
            <p>R$10,00</p>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <p>Subtotal</p>
            <p>R$70,00</p>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
