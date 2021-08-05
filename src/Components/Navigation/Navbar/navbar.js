import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import logoBigWhite from "../../../Assets/logo-big-white.png"
import menuImage from "../../../Assets/menu.png"
import userImage from "../../../Assets/utilisateur.png"
import cartImage from "../../../Assets/panier.png"
import './navbar.css';
import axios from "axios";
import Me from "../../UserAccount/Me/me";
import Adress from "../../UserAccount/Adress/adress";
import Ordered from "../../UserAccount/Ordered/ordered";
import Panier from "../../UserAccount/Panier/panier";

const Environement = require('../../../Environment/environment')
const Env = Environement.environement

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchName: "",
            searchCategory: "",
            searchDesc: "",
            redirection: false,
            goTo: null,
            category: null,
            displayCart : null
        }
        this.handleChangeSearchBar = this.handleChangeSearchBar.bind(this)
        this.handleSubmitSearch = this.handleSubmitSearch.bind(this)
        this.sendData = this.sendData.bind(this)
        this.goToLogin = this.goToLogin.bind(this)
        this.displayCart = this.displayCart.bind(this)
    }

    componentDidMount() {
        axios.get(Env.backBase + '/category/all')
            .then(res => {
                this.setState({category: res.data.category})
            })
            .catch(error =>
                console.log(error)
            );
    }

    sendData = () => {
        this.props.parentCallback(
            {
            research : '/products/productsFromResearch/' +this.state.searchName,
                displayCart : this.state.displayCart
            });
    }
    sendCart = ()=>{
        console.log("navbar", this.state.displayCart)
        this.props.parentCallback(
            {
                displayCart : this.state.displayCart
            });
    }

    handleChangeSearchBar(event) {
        this.setState({
                searchName: event.target.value
            }
        );
    }

    handleSubmitSearch(event) {
        if (event.charCode === 13) {
            event.preventDefault();
            this.sendData();
        }
    }

    goToLogin(event) {
        event.preventDefault();
        this.setState({goTo: "/login"})
    }
    displayCart() {
        this.setState({displayCart: true})

        console.log("navbar onclick", this.state.displayCart)

        this.sendCart();
    }

    render() {
        console.log("dans le render",this.state.displayCart)
        let connected = localStorage.getItem('letShopToken');
        let itemMap = []
        if (this.state.goTo === "/login") {
            window.location.href = "/login"
        }
        if (this.state.category) {
            itemMap = this.state.category.map((item, index) => {
                return (
                    <div className="dropdown">
                        <button key={index} className="btn btn-default" id={item._id} data-bs-toggle="dropdown" aria-expanded="false">{item.name}</button>
                        <ul className="dropdown-menu" aria-labelledby={item._id}>
                            {(() => item.subCategory.map((subItem, subIndex) => {
                                return(
                                    <li key={subIndex}><Link className="dropdown-item" to={"subCat/" + subItem._id}>{subItem.name}</Link></li>
                                )
                            })
                            )()}
                        </ul>
                    </div>
                )
            })
        }
        return (
            <Fragment>
                <nav
                    className="navbar navbar-expand-xl global_bgColor--charcoal global_fontColor--whiteSmoke navBar_mainContainer">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand p-0"><img src={process.env.PUBLIC_URL + logoBigWhite}
                                                                       className="navBar_logo" alt=""/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span><img src={process.env.PUBLIC_URL + menuImage} alt="Icone pour dérouler le menu"
                                       className="navBar_menuIcon"/></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
                            <div className="nav-item">

                                <form>
                                    <div className="form-floating ms-3 me-3">
                                        <input onChange={this.handleChangeSearchBar}
                                               onKeyPress={this.handleSubmitSearch} type="text"
                                               className="form-control navBar_searchBar ps-0 pe-0"
                                               id="floatingSearch" placeholder="Search Bar"/>
                                        <label htmlFor="floatingSearch"
                                               className="font_montserrat navBar_searchBar--label ps-0 pe-0 pt-0 flex-nowrap">Rechercher
                                            un produit<span className="navBar_searchBar--labelSpan">, une marque, une référence</span>…</label>
                                    </div>
                                </form>
                            </div>
                            <div className="nav-item pt-xl-0 pt-lg-2">
                                {(() => {
                                    if (connected === undefined || connected === null) {
                                        return (
                                            <button
                                                className="btn btn-default global_fontColor--whiteSmoke font_montserrat"
                                                onClick={this.goToLogin}
                                            >
                                                <div className="navBar_link--image">
                                                    <img src={process.env.PUBLIC_URL + userImage}
                                                         className="navBar_Image--size" alt=""/> <br/>
                                                    <span className="align-bottom ps-2">M'identifier</span>
                                                </div>
                                                <span className="navBar_link--title">M'identifier</span>
                                            </button>);
                                    } else {
                                        return (
                                            <Link
                                                className="btn btn-default global_fontColor--whiteSmoke font_montserrat"
                                                to="/account">
                                                <div className="navBar_link--image">
                                                    <img src={process.env.PUBLIC_URL + userImage}
                                                         className="navBar_Image--size" alt=""/> <br/>
                                                    <span className="align-bottom">Compte</span>
                                                </div>
                                                <span className="navBar_link--title">Mon Compte</span>
                                            </Link>);
                                    }
                                })()}
                            </div>
                            <div className="nav-item pt-xl-0 pt-lg-2">
                                <Link className="btn btn-default global_fontColor--whiteSmoke font_montserrat"
                                      to="/panier">
                                    <div className="navBar_link--image">
                                        <img src={process.env.PUBLIC_URL + cartImage} className="navBar_Image--size"
                                             alt=""  onClick={()=>this.displayCart()} />
                                        <span className="badge rounded-pill bg-danger align-top" >99+</span> <br/>
                                        <span className="align-bottom">Caddie</span>
                                    </div>
                                    <span className="navBar_link--title"  onClick={this.displayCart}>Mon panier <span
                                        className="badge rounded-pill bg-danger align-top">99+</span></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid global_bgColor--blueSky btn-group">
                    {itemMap}
                </div>
            </Fragment>
        )
    }
}

export default Navbar