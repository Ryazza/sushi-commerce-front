import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import Bus from "./Utils/Bus";

import Navbar from './Components/Navbar/navbar'
import MyAccount from './Components/MyAccount/myAccount'
import Connexion from "./Components/Connexion/connexion";
import Register from "./Components/Register/register";

window.flash = (title, message, type = "success") => Bus.emit ('flash', ({title, message, type}));


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/account">
                    <Navbar />
                    <MyAccount />
                </Route>
                <Route path="/register" >
                    <Register />
                </Route>
                <Route path="/" >
                    <Connexion />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
