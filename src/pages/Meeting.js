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
import {useLocation} from "react-router-dom";

const defaultTheme = createTheme();

export default function MeetingPage(){

    const [meetingData, setMeetingData] = useState([])
    const location = useLocation();
    const { meeting } = location.state;


    useEffect(() => {
        fetch(`http://localhost:8080/meetings/meeting/${meeting.id}`,{
            method: "GET",
            headers: {
                "content-type": "application/json",
                "username":localStorage.getItem("username")
            }
        }).then(response => response.json())
            .then(result =>{
                console.log(result)
                setMeetingData(result)
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
                                    <Grid item xs={6} sm={6}>
                                        <Paper sx={{p: 2, display: 'flex', flexDirection: 'row'}}>
                                            Создатель встречи: {meetingData.owner}
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <Paper sx={{p: 2, display: 'flex', flexDirection: 'row'}}>
                                            Название: {meetingData.name}
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <Paper sx={{p: 2, display: 'flex', flexDirection: 'row'}}>
                                            Название места: {meetingData.location}
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <Paper sx={{p: 2, display: 'flex', flexDirection: 'row'}}>
                                            Дата: {meetingData.date}
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <Paper sx={{p: 2, display: 'flex', flexDirection: 'row'}}>
                                            Описание встречи: {meetingData.description}
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