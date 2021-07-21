import React from "react"
import {Component, Fragment} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './products.css'
import NavbarProduct from "../../Components/NavbarProduct/navbarProduct";
import NewProduct from "../../Components/NewProduct/newProduct";
export default class Products extends Component {

    render() {
        return(
            <Fragment>
                <NewProduct/>
            </Fragment>
        )
    }

}