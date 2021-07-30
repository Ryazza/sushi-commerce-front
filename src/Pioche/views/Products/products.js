import React from "react"
import {Component, Fragment} from "react";
import './products.css'
import NavbarProduct from "../../component/NavbarProduct/navbarProduct";
import NewProduct from "../../component/NewProduct/newProduct";
import Navbar from "../../../Components/Navigation/Navbar/navbar";
import NavbarAdmin from "../../component/NavbarAdmin/navbarAdmin";
export default class Products extends Component {

    render() {
        return(
            <Fragment>
                <Navbar/>
                <NavbarAdmin/>
                <NavbarProduct/>
                <NewProduct/>
            </Fragment>
        )
    }

}