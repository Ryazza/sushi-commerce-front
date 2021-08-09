import React from "react";
import {Component, Fragment} from "react";
import NavbarAdmin from "../../../Components/Admin/NavbarAdmin/navbarAdmin";
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
