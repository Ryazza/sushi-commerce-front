import React from "react";
import {Component, Fragment} from "react";
import NavbarAdmin from "../../../Pioche/component/NavbarAdmin/navbarAdmin";
import DeleteSubCategory from "../../../Components/Admin/Labels/SubCategory/deleteSubCategory";
// import ViewOneCategory from "../../../Components/Admin/Labels/Category/viewOneCategory";

export default class DeleteSubCategoriePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subCategory: this.props.location.state.subCategory,
            category: this.props.location.state
        }
    }

    render() {
        return(
            <Fragment>
                <NavbarAdmin/>
                <DeleteSubCategory subCategory={this.state.subCategory} category={this.state.category}/>
            </Fragment>
        )
    }
}
