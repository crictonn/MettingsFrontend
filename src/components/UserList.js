import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Title from './Title';
import {useEffect, useState} from "react";


export default function Orders() {
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/users/all",{
            method: "GET",
            headers: {
                "content-type": "application/json",
            }
        }).then(response => response.json())
            .then(result =>{
                setCompanies(result)
                console.log("Result: ",result)
            })

    }, []);

    const columns = [
        { field: 'username', headerName: 'Логин', width: 200 },
        { field: 'first_name', headerName: 'Имя', width: 200 },
        { field: 'last_name', headerName: 'Фамилия', width: 200 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'role', headerName: 'Роль', width: 100 },
        { field: 'companyID', headerName: 'Принадлежность к компании', width: 250 },

    ];

    return (
        <React.Fragment>
            <Title>Пользователи</Title>
            <DataGrid
                columns={columns}
                rows={companies}
                pageSizeOptions={[1,2,5,10]}
                autoHeight={true}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                disableRowSelectionOnClick
            />
        </React.Fragment>
    );
}