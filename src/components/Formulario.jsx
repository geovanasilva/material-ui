import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, InputBase } from "@material-ui/core";

const Input = withStyles((theme) => ({
  input: {
    backgroundColor: theme.palette.common.white,
    boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.06)",
    fontSize: 12,
    marginTop: theme.spacing(2),
    padding: "10px 12px",
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  titulos: {
    marginTop: theme.spacing(3),
    fontSize: 30,
  },
}));

export default function Form() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h3" className={classes.titulos}>
        Informações
      </Typography>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Input placeholder="Nome" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Input placeholder="E-mail" fullWidth />
          </Grid>
        </Grid>
      </form>
      <Typography variant="h3" className={classes.titulos}>
        Endereço de entrega
      </Typography>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Input placeholder="CEP" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Input placeholder="Rua / Avenida" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <Input placeholder="Número" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <Input placeholder="Complemento" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <Input placeholder="Cidade" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <Input placeholder="Estado" fullWidth />
          </Grid>
        </Grid>
      </form>
      <Typography variant="h3" className={classes.titulos}>
        Pagamento
      </Typography>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Input placeholder="Número do cartão" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Input placeholder="Nome do títular do cartão" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <Input placeholder="Validade" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <Input placeholder="CVV" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Input placeholder="CPF do titular do cartão" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Input placeholder="Número de parcelas" fullWidth />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
