import React from "react";
import {Component, Fragment} from "react";
import Promotion from "../../Components/Home/Promotion/promotion";

export default class ChangeProduct extends Component {

    render() {
        return(
            <Fragment>
                <Navbar/>
                <Promotion />
            </Fragment>
        )
    }
}
