import React, { Component} from 'react';
import { Routes, Route, Navigate} from 'react-router-dom'
// import {authRoutes, publicRoutes, employeeRoutes} from '../Routes';
import {observer} from 'mobx-react-lite'
import {publicRoutes} from "../Routes";

const AppRouter = observer( () => {
    return (
        <Routes>
            {/*{localStorage.getItem("role")==="EMPLOYEE" && employeeRoutes.map(({path, Component}) =>*/}
            {/*    <Route key={path} path={path} element={<Component/>} exact />*/}
            {/*)}*/}

            {/*{localStorage.getItem("role")==="ADMIN" && authRoutes.map(({path, Component}) =>*/}
            {/*    <Route key={path} path={path} element={<Component/>} exact />*/}
            {/*)}*/}

            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<Navigate to ="/" />} />
        </Routes>
    );
});

export default AppRouter;