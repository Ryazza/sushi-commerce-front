import React from "react";
import {Component, Fragment} from "react";
import DisplayProducts from "../../component/DisplayProducts/displayProducts";
import NavbarAdmin from "../../../Components/Admin/NavbarAdmin/navbarAdmin";
import NavbarProduct from "../../component/NavbarProduct/navbarProduct";

export default class ChangeProduct extends Component {
    render() {
        return(
            <Fragment>
                <NavbarAdmin/>
                <NavbarProduct/>
                <DisplayProducts/>
            </Fragment>
        )
    }
}
