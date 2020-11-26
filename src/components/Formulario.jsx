import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Typography, Box, InputBase } from "@material-ui/core";

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
        <Box display="flex" flexDirection="column">
          <Input placeholder="Nome" />
          <Input placeholder="E-mail" />
        </Box>
      </form>
      <Typography variant="h3" className={classes.titulos}>
        Endereço de entrega
      </Typography>
      <form>
        <Box display="flex" flexDirection="column">
          <Input placeholder="CEP" />
          <Input placeholder="Rua / Avenida" />
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Input placeholder="Número" />
            <Input placeholder="Complemento" />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Input placeholder="Cidade" />
            <Input placeholder="Estado" />
          </Box>
        </Box>
      </form>
      <Typography variant="h3" className={classes.titulos}>
        Pagamento
      </Typography>
      <form>
        <Box display="flex" flexDirection="column">
          <Input placeholder="Número do cartão" />
          <Input placeholder="Nome do títular do cartão" />
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Input placeholder="Validade" />
            <Input placeholder="CVV" />
          </Box>
          <Input placeholder="CPF do titular do cartão" />
          <Input placeholder="Número de parcelas" />
        </Box>
      </form>
    </div>
  );
}
