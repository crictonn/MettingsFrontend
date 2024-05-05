import CssBaseline from "@mui/material/CssBaseline";
import Appbar from "../components/Appbar";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {Paper} from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import {useEffect, useState} from "react";

const defaultTheme = createTheme();

export default function ProfilePage(){
    const [userData, setUserData] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/users/user",{
            method: "GET",
            headers: {
                "content-type": "application/json",
                "username":localStorage.getItem("username")
            }
        }).then(response => response.json())
            .then(result =>{
                console.log(result)
                setUserData(result)
            })

    }, []);

    return(
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Appbar/>
                <Toolbar/>
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12}>
                                        <Grid>
                                            Здравствуйте, <i><b>{userData.firstName} {userData.lastName}</b></i>
                                        </Grid>
                                            <Paper sx={{p: 2, display: 'flex', flexDirection: 'row', mt:3}}>
                                                Имя пользователя: {userData.username}
                                            </Paper>
                                        <Paper sx={{p: 2, display: 'flex', flexDirection: 'row', mt:2}}>
                                            Email: {userData.email}
                                        </Paper>
                                        <Paper sx={{p: 2, display: 'flex', flexDirection: 'row', mt:2}}>
                                            Роль: {userData.role}
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>


            </Box>
        </ThemeProvider>
    )
}