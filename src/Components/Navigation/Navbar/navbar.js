import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import logoBigWhite from "../../../Assets/logo-big-white.png"
import menuImage from "../../../Assets/menu.png"
import userImage from "../../../Assets/utilisateur.png"
import cartImage from "../../../Assets/panier.png"
import './navbar.css';

class Navbar extends Component {

    render() {
        let conected = localStorage.getItem('letShopToken');
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg global_bgColor--charcoal global_fontColor--whiteSmoke navBar_mainContainer">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand p-0"><img src={process.env.PUBLIC_URL + logoBigWhite} className="navBar_logo" alt=""/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span><img src={process.env.PUBLIC_URL + menuImage} alt="Icone pour dérouler le menu" className="navBar_menuIcon" /></span>
                        </button>
                        <div className="collapse navbar-collapse  justify-content-between" id="navbarSupportedContent">
                            <div className="nav-item"> </div>
                            <div className="nav-item">
                                <form>
                                    <div className="form-floating ms-3 me-3">
                                        <input type="text" className="form-control navBar_searchBar ps-0 pe-0" id="floatingSearch" placeholder="Password"/>
                                        <label htmlFor="floatingSearch" className="font_montserrat navBar_searchBar--label ps-0 pe-0 pt-0 flex-nowrap">Rechercher un produit<span className="navBar_searchBar--labelSpan">, une marque, une référence</span>…</label>
                                    </div>
                                </form>
                            </div>
                            <div className="nav-item ">
                                {(() => {
                                    if(conected === undefined || conected === null) {
                                        return(<Link className="btn btn-default global_fontColor--whiteSmoke font_montserrat" to="/login">
                                            <img src={process.env.PUBLIC_URL + userImage} className="navBar_logo" alt=""/>
                                            Mon Compte
                                        </Link>);
                                    } else {
                                        return(<Link className="btn btn-default global_fontColor--whiteSmoke font_montserrat" to="/account">
                                            <img src={process.env.PUBLIC_URL + userImage} className="navBar_userImage" alt=""/>
                                            Mon Compte
                                        </Link>);
                                    }
                                })()}
                                <Link className="btn btn-default global_fontColor--whiteSmoke navBar_link font_montserrat" to="/panier">Mon panier</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid global_bgColor--blueSky sousNavTemporaire">
                </div>
            </Fragment>
        )
    }
}

export default Navbar