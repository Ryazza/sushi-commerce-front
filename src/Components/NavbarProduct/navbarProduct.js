import React from "react"
import {Component, Fragment} from "react";
import {Link} from "react-router-dom";
import './navbarProduct.css';

export default class NavbarProduct extends Component {
    render() {
        return(
            <Fragment>
                <div className="Product_navBar container font_cabin d-flex justify-content-center">
                    <p className="font_montserrat">Dashboard - Gestion des articles</p>
                    <nav className="Product_navBar align-self-center">
                        <Link className="Product_navBar_btn global_fontColor--whiteSmoke global_fontColorCTA" to="/newProduct">Créer</Link>
                        <Link className="Product_navBar_btn global_fontColor--whiteSmoke global_fontColorCTA" to="/changeProduct">Modifier</Link>
                    </nav>
                </div>
            </Fragment>
        )
    }
}