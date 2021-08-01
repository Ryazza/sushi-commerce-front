import React, {Component, Fragment} from 'react';
import {Switch, Route} from "react-router-dom";
import '../App.css';

import Bus from "../Utils/Bus";

import UserAccount from '../Views/AccountPage/myAccount'
import Login from "../Views/LoginPage/connexion";
import Register from "../Views/RegisterPage/register";
import HomePage from "../Views/HomePage/homepage";
import ProductDetail from "../Views/ProductDetail/productDetail"
import Navbar from "../Components/Navigation/Navbar/navbar";
import {createBrowserHistory} from "history";
import PrivateRoute from "../Components/privateRoute/PrivateRoute";
import AdminPage from "../Views/Admin/adminPage";
// import Admin from "./Pioche/views/AdminAccount/admin";
// import Products from "./Pioche/views/Products/products";
// import ManageUsers from "./Pioche/views/ManageUsers/manageUsers";
// import ChangeProduct from "./Pioche/views/ChangeProduct/changeProduct";
// import ManageLabels from "./Pioche/views/ManageLabels/manageLabels";
// import OrdersView from "./Pioche/views/OrdersView/ordersView";
window.flash = (title, message, type = "success") => Bus.emit('flash', ({title, message, type}));

export default class MainRouter extends Component {

    constructor(props) {
        super(props);
        const history = createBrowserHistory()
        this.state = {
            route: history.location.pathname
        }
        console.log(this.state.route)
    }

    render() {
        return (
            <Fragment>
                { this.state.route === "/login"? null : this.state.route === "/register"? null:
                    <Navbar/>
                }
                <Switch>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/produit/idProduit" component={ProductDetail}/>
                    <Route path="/account" component={UserAccount}/>
                    <PrivateRoute exact path={"/admin"} component={AdminPage}/>
                    {/* admin category */}
                    <PrivateRoute exact path={"/admin/category/:id"} component={AdminPage}/>
                    <PrivateRoute exact path={"/admin/addCategory/:id"} component={AdminPage}/>
                    <PrivateRoute exact path={"/admin/modifyCategory/:id"} component={AdminPage}/>
                    <PrivateRoute exact path={"/admin/deleteCategory/:id"} component={AdminPage}/>
                    <PrivateRoute exact path={"/admin/addSubCategory/:id"} component={AdminPage}/>
                    {/* end admin category */}
                    <Route path="/" component={HomePage}/>
                </Switch>
            </Fragment>
        )
    }
}
