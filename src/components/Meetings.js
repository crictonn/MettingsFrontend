import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Paper} from "@mui/material";


export default function Meetings() {
    const navigate = useNavigate();


    // const HandleOrder = (id) =>{
    //     console.log(id);
    //     // window.location.replace(`https://localhost:3000/order/${id}`);
    // }

    const [meetings, setMeetings] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/meetings",{ //TODO Поменять линк
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

    const rows = []

    const columns = [
        {field: 'id', headerName: 'ID', width: 50},
        { field: 'orderName', headerName: 'Название', width: 120 },
        { field: 'regDate', headerName: 'Дата заказа', type: "Date", width: 120 },
        { field: 'arrivalDate', headerName: 'Расчетная дата прибытия', type: "Date", width: 190 },
        { field: 'departurePoint', headerName: 'Точка отправки', width: 140 },
        { field: 'destinationPoint', headerName: 'Пункт назначения', width: 150 },
        { field: 'status', headerName: 'Статус', width: 100 },
        { field: 'price', headerName: 'Цена', width: 100 },
        { field: 'fragile', headerName: 'Хрупкий', type: 'Boolean', width: 70},
        { field: 'dangerous', headerName: 'Опасный', type: 'Boolean', width: 70}
    ];

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Название встречи</TableCell>
                        <TableCell align="right">Место</TableCell>
                        <TableCell align="right">Дата</TableCell>
                        <TableCell align="right">Организатор</TableCell>
                        <TableCell align="right">Описание</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {meetings.map((meeting) => (
                        <TableRow
                            key={meeting.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {meeting.name}
                            </TableCell>
                            <TableCell align="right">{meeting.place}</TableCell>
                            <TableCell align="right">{meeting.date}</TableCell>
                            <TableCell align="right">{meeting.owner}</TableCell>
                            <TableCell align="right">{meeting.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}