import React from "react"
import {Component, Fragment} from "react";
import './products.css'
import DisplayProducts from "../../Components/DisplayProducts/displayProducts";
export default class Products extends Component {

    render() {
        return(
            <Fragment>
                <DisplayProducts/>
            </Fragment>
        )
    }

}
