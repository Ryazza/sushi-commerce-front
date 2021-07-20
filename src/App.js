import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import Bus from "./Utils/Bus";

import Navbar from './Components/Navbar/navbar'
import UserAccount from './Views/UserAccount/myAccount'
import Login from "./Views/Login/connexion";
import Register from "./Views/Register/register";
import Admin from "./Views/AdminAccount/Admin";

window.flash = (title, message, type = "success") => Bus.emit ('flash', ({title, message, type}));

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/account">
                    <Navbar />
                    <UserAccount />
                </Route>
                <Route path="/register" >
                    <Register />
                </Route>
                <Route path="/admin">
                    <Navbar/>
                    <Admin />
                </Route>
                <Route path="/" >
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
