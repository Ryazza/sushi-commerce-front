import React from "react";
import {Component, Fragment} from "react";
import DisplayProducts from "../../component/DisplayProducts/displayProducts";
import Navbar from "../../../Components/Navigation/Navbar/navbar";
import NavbarAdmin from "../../component/NavbarAdmin/navbarAdmin";
import NavbarProduct from "../../component/NavbarProduct/navbarProduct";

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