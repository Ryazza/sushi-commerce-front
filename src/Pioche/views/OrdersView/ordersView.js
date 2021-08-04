import React from "react";
import {Component,Fragment} from "react";
import NavbarAdmin from "../../component/NavbarAdmin/navbarAdmin";

export default class OrdersView extends Component {
    render() {
        return(
            <Fragment>
                <NavbarAdmin/>
                <div>Commandes</div>
            </Fragment>
        )
    }
}
