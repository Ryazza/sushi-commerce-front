import React from "react";
import {Component, Fragment} from "react";
import NavbarAdmin from "../../Pioche/component/NavbarAdmin/navbarAdmin";

export default class AdminPage extends Component {
    constructor(props) {
        super(props);
        console.log("dans admin")
    }

    render() {
        return(
            <Fragment>
                <NavbarAdmin/>
            </Fragment>
        )
    }
}
