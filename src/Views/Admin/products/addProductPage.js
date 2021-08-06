import React from "react";
import {Component, Fragment} from "react";
import NavbarAdmin from "../../../Pioche/component/NavbarAdmin/navbarAdmin";
import NewProduct from "../../../Components/Admin/products/newProduct";
import NavbarProduct from "../../../Components/Admin/products/NavbarProduct/navbarProduct";

export default class AddProductPage extends Component {

    render() {
        return(
            <Fragment>
                <NavbarAdmin/>
                <NavbarProduct/>
                <NewProduct/>
            </Fragment>
        )
    }
}
