import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Typography, Box, FormControl, InputBase } from "@material-ui/core";

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
  tituloMargin: {
    marginTop: theme.spacing(3),
  },
}));

export default function Form() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h3" className={classes.tituloMargin}>
        <Box fontSize={30}>Informações</Box>
      </Typography>
      <form>
        <Box display="flex" flexDirection="column">
          <FormControl>
            <Input placeholder="Nome" />
          </FormControl>
          <FormControl>
            <Input placeholder="E-mail" />
          </FormControl>
        </Box>
      </form>
      <Typography variant="h3" className={classes.tituloMargin}>
        <Box fontSize={30}>Endereço de entrega</Box>
      </Typography>
      <form>
        <Box display="flex" flexDirection="column">
          <FormControl>
            <Input placeholder="CEP" />
          </FormControl>
          <FormControl>
            <Input placeholder="Rua / Avenida" />
          </FormControl>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <FormControl>
              <Input placeholder="Número" />
            </FormControl>
            <FormControl>
              <Input placeholder="Complemento" />
            </FormControl>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <FormControl>
              <Input placeholder="Cidade" />
            </FormControl>
            <FormControl>
              <Input placeholder="Estado" />
            </FormControl>
          </Box>
        </Box>
      </form>
      <Typography variant="h3" className={classes.tituloMargin}>
        <Box fontSize={30}>Pagamento</Box>
      </Typography>
      <form>
        <Box display="flex" flexDirection="column">
          <FormControl>
            <Input placeholder="Número do cartão" />
          </FormControl>
          <FormControl>
            <Input placeholder="Nome do títular do cartão" />
          </FormControl>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <FormControl>
              <Input placeholder="Validade" />
            </FormControl>
            <FormControl>
              <Input placeholder="CVV" />
            </FormControl>
          </Box>
          <FormControl>
            <Input placeholder="CPF do titular do cartão" />
          </FormControl>
          <FormControl>
            <Input placeholder="Número de parcelas" />
          </FormControl>
        </Box>
      </form>
    </div>
  );
}
