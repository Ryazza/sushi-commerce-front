import React, {Fragment} from "react";
import {Component} from "react";
import NavbarAdmin from "../../../../Components/Admin/NavbarAdmin/navbarAdmin";
import ViewAllOrder from "../../../../Components/Admin/ViewAllOrder/ViewAllOrder";

export default class ViewAll extends Component {

    render() {
        return(
            <Fragment>
                <NavbarAdmin/>
                <ViewAllOrder/>
            </Fragment>
        )
    }
}