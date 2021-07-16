import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import Bus from "./Utils/Bus";

import Navbar from './Components/Navbar/navbar'

window.flash = (title, message, type = "success") => Bus.emit ('flash', ({title, message, type}));


function App() {
    return (
        <Router>
            <Navbar></Navbar>
            <Switch>
                <Route path="/" >
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
