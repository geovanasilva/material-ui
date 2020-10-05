import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Avatar, Box, FormControl, InputBase, Button } from '@material-ui/core';
import { Card, CardContent } from '@material-ui/core';
import Carrinho from '../assets/carrinho.svg';

const Input = withStyles((theme) => ({
    input: {
        backgroundColor: theme.palette.common.white,
        boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.06)',
        fontSize: 12,
        marginTop: theme.spacing(2),
        padding: '10px 12px',
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    botao: {
        borderRadius: 0,
        boxShadow: '10px 10px 30px rgba(255,203,71, 0.5)',
        color: 'white',
        fontSize: 12,
        fontWeight: 700,
        height: 50,
        margin: '20px 0px',
        textTransform: 'none',
        width: 200,
    },
    carrinhoInfo: {
        marginBottom: theme.spacing(6),
        marginTop: theme.spacing(2),
        width: 600,
    },
    cartao: {
        minHeight: 500,
        minWidth: 400,
    },
    opacity: {
        opacity: 0.5,
    },
    primeiroTituloMargin: {
        marginTop: theme.spacing(6),
    },
    tituloMargin: {
        marginTop: theme.spacing(3),
    },
}));

export default function Main() {
    const classes = useStyles();
    return (
        <main>
            <Grid container spacing={3}>
                <Grid item xs={1}>
                </Grid>
                <Grid container xs={8} direction="row" justify="space-between">
                    <Grid item xs={6}>
                        <Typography variant="h3" className={classes.primeiroTituloMargin}>
                            <Box fontSize={30}>
                                Finalizar pedido
                            </Box>
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
                                <Typography className={classes.opacity}>
                                    <Box fontSize={14} >
                                        Insira suas informações abaixo e você receberá um e-mail com os detalhes da sua compra.
                                        Assim que o pagamento for processado você receberá seu produto em sua casa em até 7 dias úteis.
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography variant="h3" className={classes.tituloMargin}>
                            <Box fontSize={30}>
                                Informações
                            </Box>
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
                            <Box fontSize={30}>
                                Endereço de entrega
                            </Box>
                        </Typography>
                        <form>
                            <Box display="flex" flexDirection="column">
                                <FormControl>
                                    <Input placeholder="CEP" />
                                </FormControl>
                                <FormControl>
                                    <Input placeholder="Rua / Avenida" />
                                </FormControl>
                                <Box display="flex" flexDirection="row" justifyContent="space-between">
                                    <FormControl>
                                        <Input placeholder="Número" />
                                    </FormControl>
                                    <FormControl>
                                        <Input placeholder="Complemento" />
                                    </FormControl>
                                </Box>
                                <Box display="flex" flexDirection="row" justifyContent="space-between">
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
                            <Box fontSize={30}>
                                Pagamento
                            </Box>
                        </Typography>
                        <form>
                            <Box display="flex" flexDirection="column">
                                <FormControl>
                                    <Input placeholder="Número do cartão" />
                                </FormControl>
                                <FormControl>
                                    <Input placeholder="Nome do títular do cartão" />
                                </FormControl>
                                <Box display="flex" flexDirection="row" justifyContent="space-between">
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
                        <Button variant="contained" color="primary" className={classes.botao}>Finalizar Pagamento</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Card className={classes.cartao}>
                            <CardContent>
                                <Typography variant="h3">
                                    <Box fontSize={20}>
                                        Resumo do pedido
                                    </Box>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                </Grid>
            </Grid>
        </main>
    )
}
