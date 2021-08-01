import React from "react";
import {Component, Fragment} from "react";
import NavbarAdmin from "../../../Pioche/component/NavbarAdmin/navbarAdmin";
import ModifyCategory from "../../../Components/Admin/Labels/Category/modifyCategory";

export default class ModifyCategoryPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryName: this.props.location.state.name,
            categoryId: this.props.match.params.id,
        }
    }

    render() {
        return(
            <Fragment>
                <NavbarAdmin/>
                <ModifyCategory category={this.props.location.state}/>
            </Fragment>
        )
    }
}
