import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Appbar from "../components/Appbar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import {Grid, InputLabel, NativeSelect, Paper} from "@mui/material";
import * as React from "react";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {useEffect, useState} from "react";


const defaultTheme = createTheme()

export default function CreateMeeting(){
    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        fetch("http://localhost:8080/meetings/new",{
            method: "POST",
            headers: {
                "content-type": "application/json",
                "username": localStorage.getItem('username'),
            },
            body:
                JSON.stringify({
                    name: data.get('meetingName'),
                    location: location,
                    date: data.get('date'),
                    description: data.get('description')
                })
        }).then(response =>{
            if (response.ok) {
                window.alert("Встреча успешно создана")
                window.location.replace("http://localhost:3000/home");
            } else {
                window.alert("Ошибка при создании встречи")
            }
        })
    }

        const [locations, setLocations] = useState([])

        useEffect(() => {
            fetch("http://localhost:8080/locations/get/all",{
            method: "GET",
            headers: {
                "content-type": "application/json",
                "username":localStorage.getItem("username")
            }
        }).then(response => response.json())
            .then(result =>{
                setLocations(result)
                console.log("Result: ",result)
            })

    }, []);

    const [location, setLocation] = useState(1);

    const handleChange = (event) => {
        setLocation(event.target.value);
    };

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
                <Container maxWidth="lg" component="form" onSubmit={handleSubmit} sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'row', mt:1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={6} sm={6}>
                                        <TextField sx={{width:'100%'}}
                                                   required
                                                   name="meetingName"
                                                   label="Название встречи"
                                                   type="text"
                                                   id="meetingName"
                                                   autoComplete="meetingName"
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <TextField sx={{width:'100%'}}
                                                   required
                                                   name="date"
                                                   type="date"
                                                   id="date"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <TextField sx={{width:'100%'}}
                                                   name="description"
                                                   label="Описание"
                                                   type="text"
                                                   id="description"
                                                   autoComplete="description"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                            Место
                                        </InputLabel>
                                        <NativeSelect
                                            onChange={handleChange}
                                            inputProps={{
                                                name: 'location',
                                                id: 'uncontrolled-native',
                                            }}
                                        >
                                            {locations.map((loc) => (
                                                <option value={loc.id}>{loc.name}</option>
                                                    ))}
                                        </NativeSelect>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit"
                                    variant="contained"
                                    fullWidth
                                    sx={{ mt: 3, mb: 2 }}
                            >
                                Создать
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    )
}