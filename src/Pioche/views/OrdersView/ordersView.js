import React from "react";
import {Component,Fragment} from "react";
import Navbar from "../../../Components/Navigation/Navbar/navbar";
import NavbarAdmin from "../../component/NavbarAdmin/navbarAdmin";

export default class OrdersView extends Component {
    render() {
        return(
            <Fragment>
                <Navbar/>
                <NavbarAdmin/>
                <div>Commandes</div>
            </Fragment>
        )
    }
}