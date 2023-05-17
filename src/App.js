import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import "./styles/app.css"
import Navbar from "./Components/Navbar/Navbar";
import Error from "./pages/Error";
import {Navigate} from "react-router";
import AppRouter from "./Components/AppRouter/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;