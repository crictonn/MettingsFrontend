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
import {useState} from "react";

const defaultTheme = createTheme()

export default function CreateMeeting(){
    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        fetch("http://localhost:8080/locations/new",{
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body:
                JSON.stringify({
                    name: data.get('locationName'),
                    location: data.get('location'),
                    type: type
                })
        }).then(response =>{
            if (response.ok) {
                window.alert("Место успешно создано")
                window.location.replace("http://localhost:3000/home");
            } else {
                window.alert("Ошибка при создании места")
            }
        })
    }

    const [type, setType] = useState('')

    const handleChange = (event) => {
        setType(event.target.value);
        console.log(type);
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
                                                   name="locationName"
                                                   label="Название места"
                                                   type="text"
                                                   id="locationName"
                                                   autoComplete="locationName"
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <TextField sx={{width:'100%'}}
                                                   required
                                                   name="location"
                                                   label="Адрес"
                                                   type="text"
                                                   id="location"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                            Тип заведения
                                        </InputLabel>
                                        <NativeSelect
                                            onChange={handleChange}
                                            inputProps={{
                                                name: 'location',
                                                id: 'uncontrolled-native',
                                            }}
                                        >
                                            <option value={"CAFE"}>Кафе</option>
                                            <option value={"MOVIES"}>Кинотеатр</option>
                                            <option value={"RESTAURANT"}>Ресторан</option>
                                            <option value={"THEATER"}>Театр</option>
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