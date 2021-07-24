import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import Bus from "./Utils/Bus";

import Navbar from './Components/Navbar/navbar'
import UserAccount from './Views/UserAccount/myAccount'
import Login from "./Views/Login/connexion";
import Register from "./Views/Register/register";
import Admin from "./Views/AdminAccount/admin";
import Products from "./Views/Products/products";
import NavbarAdmin from "./Components/NavbarAdmin/navbarAdmin";
import ManageUsers from "./Views/AdminAccount/ManageUsers/manageUsers";
import ChangeProduct from "./Views/Products/ChangeProduct/changeProduct";
import NavbarProduct from "./Components/NavbarProduct/navbarProduct";
import ManageLabels from "./Views/ManageLabels/manageLabels";
import OrdersView from "./Views/OrdersView/ordersView";

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
                <Route path="/newProduct">
                    <Navbar/>
                    <NavbarAdmin/>
                    <NavbarProduct/>
                    <Products/>
                </Route>
                <Route path="/manageUsers">
                    <Navbar/>
                    <NavbarAdmin/>
                    <ManageUsers/>
                </Route>
                <Route path="/changeProduct">
                    <Navbar/>
                    <NavbarAdmin/>
                    <NavbarProduct/>
                    <ChangeProduct/>
                </Route>
                <Route path="/manageLabels">
                    <Navbar/>
                    <NavbarAdmin/>
                    <ManageLabels/>
                </Route>
                <Route path="/ordersView">
                    <Navbar/>
                    <NavbarAdmin/>
                    <OrdersView/>
                </Route>
                <Route path="/login" >
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
