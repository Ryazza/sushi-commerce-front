import React from "react";
import {Component, Fragment} from "react";
import NavbarAdmin from "../../Components/Admin/NavbarAdmin/navbarAdmin";
import OrderPaid from "../../Components/Order/OrderPaid/orderPaid";
import OrderShipped from "../../Components/Order/OrderShipped/orderShipped";

export default class AdminPage extends Component {
    constructor(props) {
        super(props);
        console.log("dans admin")
    }

    render() {
        return(
            <Fragment>
                <NavbarAdmin/>
                <div className="d-flex Admin_orders_preview container justify-content-evenly">
                    <OrderPaid/>
                    <OrderShipped/>
                </div>
            </Fragment>
        )
    }
}
