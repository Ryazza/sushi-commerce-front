import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import Bus from "./Utils/Bus";

import Navbar from './Components/Navbar/navbar'

import Connexion from "./Components/Connexion/connexion";

window.flash = (title, message, type = "success") => Bus.emit ('flash', ({title, message, type}));


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" >
                    <Connexion/>
                </Route>
                <Route path="/" >
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
