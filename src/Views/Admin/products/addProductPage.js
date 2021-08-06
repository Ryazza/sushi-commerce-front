import React from "react";
import {Component, Fragment} from "react";
import NavbarAdmin from "../../../Pioche/component/NavbarAdmin/navbarAdmin";
// import AddCategory from "../../../Components/Admin/Labels/Category/addCategory";
import AddProduct from "../../../Components/Admin/products/addProduct";
import NewProduct from "../../../Components/Admin/products/newProduct";

export default class AddProductPage extends Component {

    render() {
        return(
            <Fragment>
                <NavbarAdmin/>
                <NewProduct/>
            </Fragment>
        )
    }
}
