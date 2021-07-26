import React from "react";
import {Component, Fragment} from "react";
import {Link} from "react-router-dom";
import './navbarAdmin.css';
import articleIcone from "../../../Assets/article.png"
import labelIcone from "../../../Assets/label.png"
import orderIcone from "../../../Assets/shopping-bag.png"
import userIcone from "../../../Assets/user.png";

export default class NavbarAdmin extends Component{
    render() {
        return (
            <Fragment>
                <div className="container col-5 AdminNavbar">
                    <nav id="nav nav-pills nav-justified">
                        <ul className="d-flex justify-content-between">
                            <Link className="NavBarAdmin_navLink global_fontColorCTA" to="/newProduct"><img src={process.env.PUBLIC_URL + articleIcone} className="AdminNavbar_link_img" alt=""/></Link>
                            <Link className="NavBarAdmin_navLink NavBarAdmin_navLink--orange global_bgColor--orange" to="/manageLabels"><img src={process.env.PUBLIC_URL + labelIcone} className="AdminNavbar_link_img" alt=""/></Link>
                            <Link className="NavBarAdmin_navLink NavBarAdmin_navLink--charcoal global_bgColor--charcoal" to="/manageUsers"><img src={process.env.PUBLIC_URL + userIcone} className="AdminNavbar_link_img" alt=""/></Link>
                            <Link className="NavBarAdmin_navLink NavBarAdmin_navLink--whitesmoke global_bgColor--whiteSmoke" to="/ordersView"><img src={process.env.PUBLIC_URL + orderIcone} className="AdminNavbar_link_img" alt=""/></Link>
                        </ul>
                    </nav>
                </div>
            </Fragment>
        )
    }
}