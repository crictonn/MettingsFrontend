import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import * as React from "react";


export default function Landing(){
    return(
            <Container component="main" maxWidth="100%" maxheight="100%">
                <CssBaseline />
                <Grid
                        sx={{
                            height:"97vh",
                            marginTop: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            borderRadius: 7,
                            borderColor: 'black',
                            bgcolor: '#baaee3'
                        }}
                    >
                    <Grid item xs={6} md={8} mt={"40vh"}>
                        <Button
                            size="large"
                            type="submit"
                            variant="contained"
                            sx={{ mt: 1, mb: 1, width: "230px" }}
                            href="http://localhost:3000/login"
                        >
                            Войти
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Button
                                size="large"
                                type="submit"
                                variant="contained"
                                sx={{ mt: 1, mb: 1 }}
                                href="http://localhost:3000/registration"
                            >
                                Зарегистрироваться
                            </Button>
                    </Grid>
                </Grid>
            </Container>
    )
}