import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import Bus from "./Utils/Bus";

import Navbar from './Components/Navbar/navbar'
import Register from './Components/Register/register'
import MyAccount from './Components/MyAccount/myAccount'
import Connexion from "./Components/Connexion/connexion";
import ConnexionTest from "./Components/ConnexionTest/connexionTest";
import RegisterTest from "./Components/RegisterTest/registerTest";

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
                <Route path="/login" >
                    <Connexion />
                </Route>
                <Route path="/loginTest" >
                    <ConnexionTest />
                </Route>
                <Route path="/registerTest" >
                    <RegisterTest/>
                </Route>
                <Route path="/" >
                    <Navbar />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
