import React from "react";
import {Component, Fragment} from "react";
import './navbarAdmin.css';
import articleIcone from "../../../Assets/article.png"
import labelIcone from "../../../Assets/label.png"
import orderIcone from "../../../Assets/shopping-bag.png"
import userIcone from "../../../Assets/user.png";

export default class NavbarAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "manageProducts"
        }
        this.changeToProducts = this.changeToProducts.bind(this);
        this.changeToLabels = this.changeToLabels.bind(this);
        this.changeToUsers = this.changeToUsers.bind(this);
        this.changeToOrders = this.changeToOrders.bind(this);
    }

    changeToProducts() {
        this.setState({ page: "manageProducts" });
    }

    changeToLabels() {
        this.setState({ page: "manageLabels" });
    }

    changeToUsers() {
        this.setState({ page: "manageUsers" });
    }

    changeToOrders() {
        this.setState({ page: "manageOrders" });
    }

    render() {
        return (
            <Fragment>
                <div className="container col-5 AdminNavbar">
                    <nav id="nav nav-pills nav-justified">
                        <ul className="d-flex justify-content-between">
                            <button className="NavBarAdmin_navLink global_bgColor--blueSky" onClick={this.changeToProducts}><img src={process.env.PUBLIC_URL + articleIcone} className="AdminNavbar_link_img" alt=""/></button>
                            <button className="NavBarAdmin_navLink NavBarAdmin_navLink--orange global_bgColor--orange" onClick={this.changeToLabels}><img src={process.env.PUBLIC_URL + labelIcone} className="AdminNavbar_link_img" alt=""/></button>
                            <button className="NavBarAdmin_navLink NavBarAdmin_navLink--charcoal global_bgColor--charcoal" onClick={this.changeToUsers}><img src={process.env.PUBLIC_URL + userIcone} className="AdminNavbar_link_img" alt=""/></button>
                            <button className="NavBarAdmin_navLink NavBarAdmin_navLink--whitesmoke global_bgColor--whiteSmoke" onClick={this.changeToOrders}><img src={process.env.PUBLIC_URL + orderIcone} className="AdminNavbar_link_img" alt=""/></button>
                        </ul>
                    </nav>
                </div>
                { this.state.page === "manageProducts" ?
                    <div>
                        <div className={"text-center font-weight-bold"}>page ajouter un produit (newProduct linker la view dans navbarAdmin a la place de cette ligne)</div>
                    </div>:null
                }
                { this.state.page === "manageLabels" ?
                    <div>
                        <div className={"text-center font-weight-bold"}>page ajouter une categorie sous cat (manageLabels linker la view dans navbarAdmin a la place de cette ligne)</div>
                    </div>:null
                }
                { this.state.page === "manageUsers" ?
                    <div>
                        <div className={"text-center font-weight-bold"}>page gerer les utilisateurs (manageUsers linker la view dans navbarAdmin a la place de cette ligne)</div>
                    </div>:null
                }
                { this.state.page === "manageOrders" ?
                    <div>
                        <div className={"text-center font-weight-bold"}>page gerer les utilisateurs (ordersView linker la view dans navbarAdmin a la place de cette ligne)</div>
                    </div>:null
                }
            </Fragment>
        )
    }

}
