import { Route, Routes } from "react-router-dom";
import React from "react";
import App from "./App";
import Menu from "./Menu";
import Construction from "./Construction";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/menu' element={<Menu />} />
        </Routes>
    )
}

export default Router;