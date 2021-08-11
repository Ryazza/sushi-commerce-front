import React, {Component, Fragment} from 'react';
import {Switch, Route, Redirect, BrowserRouter as Router} from "react-router-dom";
import '../App.css';

import UserAccount from '../Views/AccountPage/myAccount'
import Login from "../Views/LoginPage/connexion";
import Register from "../Views/RegisterPage/register";
import HomePage from "../Views/HomePage/homepage";
import ProductDetail from "../Views/ProductDetail/productDetail"
import Navbar from "../Components/Navigation/Navbar/navbar";
import Cart from "../Components/Navigation/Cart/cart";
import {createBrowserHistory} from "history";
import PrivateRoute from "../Components/privateRoute/PrivateRoute";
import AdminPage from "../Views/Admin/adminPage";

import ViewProductsPage from "../Views/Admin/products/viewProductsPage";
import AddProductPage from "../Views/Admin/products/addProductPage";
import DeleteProductPage from "../Views/Admin/products/deleteProductPage";
import DetailProductPage from "../Views/Admin/products/detailproductPage";
import ModifyProductPage from "../Views/Admin/products/modifyProductPage";

//multiple product
import DetailMultipleProductsPage from "../Views/Admin/products/multiple/DetailMultipleProductsPage";
import UpdateMultipleProductsPage from "../Views/Admin/products/multiple/UpdateMultipleProductsPage";
import DeleteMultipleProductsPage from "../Views/Admin/products/multiple/DeleteMultipleProductsPage";
// end multiple

import ViewCategoryPage from "../Views/Admin/Category/viewCategoryPage";
import AddCategoryPage from "../Views/Admin/Category/addCategoryPage";
import ViewOneCategoryPage from "../Views/Admin/Category/viewOneCategoryPage";
import ModifyCategoryPage from "../Views/Admin/Category/modifyCategoryPage";
import DeleteCategoryPage from "../Views/Admin/Category/deleteCategoryPage";

import ViewOneSubCategoryPage from "../Views/Admin/SubCategory/viewOneSubCategoryPage";
import AddSubCategoryPage from "../Views/Admin/SubCategory/addSubCategoryPage";
import ModifySubCategoryPage from "../Views/Admin/SubCategory/modifySubCategoryPage";
import ResearchProduct from "../Views/Products/products";
import DeleteSubCategoriePage from "../Views/Admin/SubCategory/deleteSubCategoriePage";
import SubCatDetail from "../Views/subCatDetail/subCatDetail";
import ManageUsers from "../Views/Admin/ManageUsers/manageUsers";

// import Admin from "./Pioche/views/AdminAccount/admin";
// import Products from "./Pioche/views/Products/products";
// import ManageUsers from "./Pioche/views/ManageUsers/manageUsers";
// import ChangeProduct from "./Pioche/views/ChangeProduct/changeProduct";
// import ManageLabels from "./Pioche/views/ManageLabels/manageLabels";
// import OrdersView from "./Pioche/views/OrdersView/ordersView";

export default class MainRouter extends Component {

    constructor(props) {
        super(props);
        const history = createBrowserHistory()
        this.state = {
            route: history.location.pathname,
            redirection: false,
            research: "",
        }
        this.getDataFromSearchBar=this.getDataFromSearchBar.bind(this)
    }

    getDataFromSearchBar = (data) => {
        console.log("data from nav bar = ",data)
        this.setState({
            research: data.research,
            redirection: true,
        })
    }

    render() {
        const {redirection} = this.state;
        if (redirection) {
            this.setState({redirection: false})
            return <Redirect to={{
                pathname: this.state.research,
            }}/>
        }
        return (
            <Fragment>
                <Router>
                    {this.state.route === "/login" ? null : this.state.route === "/register" ? null :
                        <Navbar parentCallback={this.getDataFromSearchBar}/>
                    }

                    <Switch>
                        <Route path="/register" component={Register}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/account" component={UserAccount}/>
                        <Route path="/produit/:id" component={ProductDetail}/>
                        <Route path="/subCat/:id" component={SubCatDetail}/>
                        <Route path="/products/productsFromResearch/:research" component={ResearchProduct}/>

                        {/* admin Products */}
                        <PrivateRoute exact path={"/admin/viewProducts"} component={ViewProductsPage}/>
                        <PrivateRoute exact path={"/admin/newProduct"} component={AddProductPage}/>
                        <PrivateRoute exact path={"/admin/product/delete/:id"} component={DeleteProductPage}/>
                        <PrivateRoute exact path={"/admin/product/detail/:id"} component={DetailProductPage}/>
                        <PrivateRoute exact path={"/admin/product/modify/:id"} component={ModifyProductPage}/>
                            {/* Multiple Product */}
                                <PrivateRoute exact path={"/admin/product/multiple/detail"} component={DetailMultipleProductsPage}/>
                                <PrivateRoute exact path={"/admin/product/multiple/modify"} component={UpdateMultipleProductsPage}/>
                                <PrivateRoute exact path={"/admin/product/multiple/delete"} component={DeleteMultipleProductsPage}/>
                            {/* end Multiple Product */}

                        {/* end admin Products */}

                        {/* admin category */}
                        <PrivateRoute exact path={"/admin/manageLabels"} component={ViewCategoryPage}/>
                        <PrivateRoute exact path={"/admin/addCategory"} component={AddCategoryPage}/>
                        <PrivateRoute exact path={"/admin/category/:id"} component={ViewOneCategoryPage}/>
                        <PrivateRoute exact path={"/admin/modifyCategory/:id"} component={ModifyCategoryPage}/>
                        <PrivateRoute exact path={"/admin/category/delete/:id"} component={DeleteCategoryPage}/>
                        {/* end admin category */}

                        {/*admin manage user*/}
                        <PrivateRoute exact path={"/admin/manageUsers"} component={ManageUsers}/>
                        {/*end admin manage user*/}



                        {/* admin SubCategory */}
                        <PrivateRoute exact path={"/admin/subCategory/:id"} component={ViewOneSubCategoryPage}/>
                        <PrivateRoute exact path={"/admin/addSubCategory/:id"} component={AddSubCategoryPage}/>
                        <PrivateRoute exact path={"/admin/subCategory/modify/:id"} component={ModifySubCategoryPage}/>
                        <PrivateRoute exact path={"/admin/subCategory/delete/:id"} component={DeleteSubCategoriePage}/>
                        {/* end admin SubCategory */}
                        <PrivateRoute exact path={"/admin"} component={AdminPage}/>
                        <Route path="/" component={HomePage}/>
                    </Switch>
                </Router>
            </Fragment>
        )
    }
}
