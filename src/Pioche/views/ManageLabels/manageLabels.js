import React  from "react";
import {Component,Fragment} from "react";
import NavbarAdmin from "../../component/NavbarAdmin/navbarAdmin";

export default class ManageLabels extends Component {
    render() {
        return(
            <Fragment>
                <NavbarAdmin/>
                <div>Labels</div>
            </Fragment>
        )
    }
}
