import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import Bus from "./Utils/Bus";

import Navbar from './Components/Navbar/navbar'
import Register from './Components/Register/register'

window.flash = (title, message, type = "success") => Bus.emit ('flash', ({title, message, type}));


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/register" >
                    <Register />
                </Route>
                <Route path="/" >
                    <Navbar />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
