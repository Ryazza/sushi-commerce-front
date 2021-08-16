import React from "react"
import {Component, Fragment} from "react";
import {Link} from "react-router-dom";
import './navbarProduct.css';

export default class NavbarProduct extends Component {
    render() {
        return(
            <Fragment>
                <div className="Product_navBar container font_cabin d-flex justify-content-center">
                    <p className="font_montserrat">Dashboard - Gestion des produits</p>
                    <nav className="Product_navBar align-self-center">
                        <Link className="Product_navBar_btn global_fontColor--whiteSmoke global_bgColor--blueSky" to="/admin/newProduct">Créer</Link>
                        <Link className="Product_navBar_btn global_fontColor--whiteSmoke global_bgColor--blueSky" to="/admin/viewProducts">Gérer</Link>
                    </nav>
                </div>
            </Fragment>
        )
    }
}
