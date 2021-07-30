import React from "react";
import {Component, Fragment} from "react";
import Navbar from "../../Components/Navigation/Navbar/navbar";
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