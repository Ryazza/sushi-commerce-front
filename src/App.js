import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import Bus from "./Utils/Bus";

import UserAccount from './Views/AccountPage/myAccount'
import Login from "./Views/LoginPage/connexion";
import Register from "./Views/RegisterPage/register";
import HomePage from "./Views/HomePage/homepage";
import ProductDetail from "./Views/ProductDetail/productDetail"
import Navbar from "./Components/Navigation/Navbar/navbar";
// import Admin from "./Pioche/views/AdminAccount/admin";
// import Products from "./Pioche/views/Products/products";
// import ManageUsers from "./Pioche/views/ManageUsers/manageUsers";
// import ChangeProduct from "./Pioche/views/ChangeProduct/changeProduct";
// import ManageLabels from "./Pioche/views/ManageLabels/manageLabels";
// import OrdersView from "./Pioche/views/OrdersView/ordersView";

window.flash = (title, message, type = "success") => Bus.emit('flash', ({title, message, type}));

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/produit/idProduit" component={ProductDetail}/>
                <Route path="/subCategory/idsubCategory" component={ProductDetail}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/account" component={UserAccount}/>
                <Route path="/" component={HomePage}/>
            </Switch>
        </Router>
    );
}

export default App;
