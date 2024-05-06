import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Col, Row, Card, CardBody} from 'react-bootstrap'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ButtonGroup, CardHeader, Paper} from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";


export default function Meetings() {
    const navigate = useNavigate();


    // const HandleOrder = (id) =>{
    //     console.log(id);
    //     // window.location.replace(`https://localhost:3000/order/${id}`);
    // }

    const [meetings, setMeetings] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/meetings",{
            method: "GET",
            headers: {
                "content-type": "application/json",
                "username":localStorage.getItem("username")
            }
        }).then(response => response.json())
            .then(result =>{
                setMeetings(result)
                console.log("Result: ",result)
            })

    }, []);

    const handleClick = (meeting) =>{
        navigate(`/meeting/${meeting.id}`, {state: {meeting}});
    };


    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Название встречи</TableCell>
                                <TableCell align="left">Дата</TableCell>
                                <TableCell align="left">Описание</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {meetings.map((meeting) => (
                                <TableRow
                                    key={meeting.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >

                                    <TableCell component="th" scope="row" onClick={() => handleClick(meeting)}>
                                        {meeting.name}
                                    </TableCell>
                                    <TableCell align="left">{meeting.date}</TableCell>
                                    <TableCell align="left">{meeting.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="success" sx={{mt:1}} href={"http://localhost:3000/meeting/new"}>
                    Создать встречу
                </Button>
                <Button variant="contained" color="success" sx={{mt:1, ml:2}} href={"http://localhost:3000/location/new"}>
                    Создать место
                </Button>
            </Grid>
        </Grid>
    );
}