import React, {Component, Fragment} from 'react';
import './connexion.css';
import {Link} from "react-router-dom";
import logo from '../../Assets/logo.png';

export default class Connexion extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navBar_mainContainer">
                    <div className="container-fluid">
                        <Link href="#" className="navbar-brand p-0"><img className="logo" src={process.env.PUBLIC_URL + logo}/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"                         aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"> </span>
                        </button>
                    </div>
                </nav>
                <div className="container col-6 font_Lobster" id="connexion">
                    <button className="col-6 connexionBtn">
                        Connexion
                    </button>
                    <button className="col-6 inscriptionBtn">
                        Inscription
                    </button>
                    <form id="connexionForm">
                        <div class="form-floating mb-3">
                        <input type="email" className="form-control" id="formGroupEmailConnexion" placeholder="name@example.com"/>
                            <label htmlFor="formGroupEmailConnexion">Adresse e-mail :</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="formGroupPwdConnexion" placeholder="name@example.com"/>
                            <label htmlFor="formGroupPwdConnexion">Mot de passe :</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="formGroupRememberMe"/>
                                <label className="form-check-label" htmlFor="formGroupRememberMe">
                                    Se rappeler de moi
                                </label>
                        </div>
                        <input type="button" className="btn btn-primary " value="Se connecter"/>
                    </form>
                </div>
            </Fragment>
        )
    }
}