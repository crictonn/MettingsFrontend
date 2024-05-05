import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Appbar from "../components/Appbar";
import {Paper, Grid} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Meetings from "../components/Meetings";


const defaultTheme = createTheme();

export default function LandingPage() {

    return (
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
                                <Meetings/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    );
}