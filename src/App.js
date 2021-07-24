import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import Bus from "./Utils/Bus";

import UserAccount from './Views/UserAccount/myAccount'
import Login from "./Views/Login/connexion";
import Register from "./Views/Register/register";
import Admin from "./Views/AdminAccount/admin";
import Products from "./Views/Products/products";
import ManageUsers from "./Views/AdminAccount/ManageUsers/manageUsers";
import ChangeProduct from "./Views/Products/ChangeProduct/changeProduct";
import ManageLabels from "./Views/ManageLabels/manageLabels";
import OrdersView from "./Views/OrdersView/ordersView";

window.flash = (title, message, type = "success") => Bus.emit ('flash', ({title, message, type}));

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/admin" component={Admin} />
                <Route path="/newProduct" component={Products} />
                <Route path="/manageUsers" component={ManageUsers} />
                <Route path="/changeProduct" component={ChangeProduct} />
                <Route path="/manageLabels" component={ManageLabels} />
                <Route path="/ordersView" component={OrdersView} />
                <Route path="/account" component={UserAccount} />
                <Route path="/register" component={Register} /> {/*  Relié  */}
                <Route path="/login" component={Login} /> {/*  Relié  */}
            </Switch>
        </Router>
    );
}

export default App;
