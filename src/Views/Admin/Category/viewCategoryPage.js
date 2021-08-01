import React from "react";
import {Component, Fragment} from "react";
import ViewAllCategory from "../../../Components/Admin/Labels/Category/viewAllCategory";
import NavbarAdmin from "../../../Pioche/component/NavbarAdmin/navbarAdmin";

export default class ViewCategoryPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "admin"
        }
    }

    render() {
        return(
            <Fragment>
                <NavbarAdmin/>
                <ViewAllCategory/>
            </Fragment>
        )
    }
}
