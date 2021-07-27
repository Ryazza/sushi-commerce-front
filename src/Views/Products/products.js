import React from "react"
import {Component, Fragment} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './products.css'
import NavbarProduct from "../../Components/Navigation/NavbarProduct/navbarProduct";
import NewProduct from "../../Components/NewProduct/newProduct";
import Navbar from "../../Components/Navigation/Navbar/navbar";
import NavbarAdmin from "../../Components/Navigation/NavbarAdmin/navbarAdmin";
export default class Products extends Component {

    render() {
        return(
            <Fragment>
                <Navbar/>
                <NavbarAdmin/>
                <NavbarProduct/>
                <NewProduct/>
            </Fragment>
        )
    }

}