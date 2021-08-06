import React from "react"
import {Component, Fragment} from "react";
import './products.css'
import NavbarProduct from "../../component/NavbarProduct/navbarProduct";
import NewProduct from "../../../Components/Admin/products/newProduct";
import NavbarAdmin from "../../component/NavbarAdmin/navbarAdmin";
export default class Products extends Component {

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
