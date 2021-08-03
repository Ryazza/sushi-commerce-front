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

import ViewCategoryPage from "../Views/Admin/Category/viewCategoryPage";
import AddCategoryPage from "../Views/Admin/Category/addCategoryPage";
import ViewOneCategoryPage from "../Views/Admin/Category/viewOneCategoryPage";
import ModifyCategoryPage from "../Views/Admin/Category/modifyCategoryPage";
import DeleteCategoryPage from "../Views/Admin/Category/deleteCategoryPage";

import AddSubCategoryPage from "../Views/Admin/SubCategory/addSubCategoryPage";
import ModifySubCategoryPage from "../Views/Admin/SubCategory/modifySubCategoryPage";
import DeleteSubCategoriePage from "../Views/Admin/SubCategory/deleteSubCategoriePage";

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
            route: history.location.pathname,
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
                    <Route path="/account" component={UserAccount}/>
                    <Route path="/produit/idProduit" component={ProductDetail}/>
                    <Route path="/subCategory/idsubCategory" component={ProductDetail}/>

                    {/* admin category */}
                        <PrivateRoute exact path={"/admin/manageLabels"} component={ViewCategoryPage}/>
                        <PrivateRoute exact path={"/admin/addCategory"} component={AddCategoryPage}/>
                        <PrivateRoute exact path={"/admin/category/:id"} component={ViewOneCategoryPage}/>
                        <PrivateRoute exact path={"/admin/modifyCategory/:id"} component={ModifyCategoryPage}/>
                        <PrivateRoute exact path={"/admin/category/delete/:id"} component={DeleteCategoryPage}/>
                    {/* end admin category */}

                    {/* admin SubCategory */}
                        <PrivateRoute exact path={"/admin/subCategory/modify/:id"} component={ModifySubCategoryPage}/>
                        <PrivateRoute exact path={"/admin/addSubCategory/:id"} component={AddSubCategoryPage}/>
                        <PrivateRoute exact path={"/admin/subCategory/delete/:id"} component={DeleteSubCategoriePage}/>
                    {/* end admin SubCategory */}
                    <PrivateRoute exact path={"/admin"} component={AdminPage}/>
                    <Route path="/" component={HomePage}/>
                </Switch>
            </Fragment>
        )
    }
}
