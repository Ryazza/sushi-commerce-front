import React from "react";
import {Component, Fragment} from "react";
import DisplayProducts from "../../Components/DisplayProducts/displayProducts";
import Navbar from "../../Components/Navigation/Navbar/navbar";
import NavbarAdmin from "../../Components/Navigation/NavbarAdmin/navbarAdmin";
import NavbarProduct from "../../Components/Navigation/NavbarProduct/navbarProduct";

export default class ChangeProduct extends Component {
    render() {
        return(
            <Fragment>
                <Navbar/>
                <NavbarAdmin/>
                <NavbarProduct/>
                <DisplayProducts/>
            </Fragment>
        )
    }
}