import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Box } from "@material-ui/core";

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
        </CardContent>
      </Card>
    </div>
  );
}
