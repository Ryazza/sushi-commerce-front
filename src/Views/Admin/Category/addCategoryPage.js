import React from "react";
import {Component, Fragment} from "react";
import NavbarAdmin from "../../../Pioche/component/NavbarAdmin/navbarAdmin";
import AddCategory from "../../../Components/Admin/Labels/Category/addCategory";

export default class AddCategoryPage extends Component {

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
                <AddCategory/>
            </Fragment>
        )
    }
}
