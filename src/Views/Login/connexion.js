import React, {Component, Fragment} from 'react';
import './connexion.css';
import {Link} from "react-router-dom";
import logoBigBlack from '../../Assets/logo-big-white.png';

export default class Connexion extends Component {

    render() {
        return (
            <Fragment>
                <div class="Login_page d-flex row font_cabin justify-content-center m-0">
                    <div className="col-6 align-self-center text-center">
                        <Link to="/" className="navbar-brand p-0"><img src={process.env.PUBLIC_URL + logoBigBlack}/></Link>
                        <p className="text-center global_sentence">Le matériel qui s'adapte à vous</p>
                    </div>
                    <div className="col-6">
                        <div className="row justify-content-center vh-100">
                            <div className="col-8 mt-3 mb-3 Login_main pb-4 align-self-center">
                                <div className="row font_montserrat text-center fs-4">
                                    <div className="col-6 pt-2 pb-2" >Connexion</div>
                                    <Link className="col-6 Login_registerBtn  pt-2 pb-2" to="/register">Inscription</Link>
                                </div>
                                <div className="row justify-content-center mt-4">
                                    <div className="col-8 pt-3 pb-3">
                                        <div className="form-floating mb-4">
                                            <input type="email" className="form-control Login_input ps-0 pe-0" id="Login_email" placeholder="name@example.com" onChange={this.handleChangeEmail}/>
                                            <label htmlFor="Login_email" className="ps-0 pe-0 pt-0">Adresse e-mail</label>
                                        </div>
                                        <div className="form-floating mb-4">
                                            <input type="password" className="form-control Login_input ps-0 pe-0" id="Login_password" placeholder="• • • • • • • • •" onChange={this.handleChangePassword}/>
                                            <label htmlFor="Login_password" className="ps-0 pe-0 pt-0">Mot de passe</label>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center mt-3">
                                        <button className="btn btn-default col-3 fs-5 global_bgColor--blueSky" onClick={this.handleSubmitLogin}>Se connecter</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}