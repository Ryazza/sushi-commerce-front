import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

import './register.css';

class Register extends Component {

    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navBar_mainContainer">
                    <div className="container-fluid">
                        <a href="#" className="navbar-brand p-0"><img src={process.env.PUBLIC_URL + '/assets/logo.png'} className="navBar_logo" alt=""/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"> </span>
                        </button>
                    </div>
                </nav>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-6 Register_main mt-5">
                            <div className="row font_lobster text-center fs-2">
                                <div className="col-6 Register_connectBtn global_fontColor--cream pt-2 pb-2">Connexion</div>
                                <div className="col-6 Register_registerBtn global_fontColor--cream pt-2 pb-2">Inscription</div>
                            </div>
                            <div className="row justify-content-center mt-4">
                                <h1 className="h2 text-center font_lobster global_fontColor--cream mb-5">Identifiants</h1>
                                <div className="col-8 pt-3 pb-3">
                                    <div className="form-floating mb-4">
                                        <input type="email" className="form-control global_bgColor--blackCyan Register_input ps-0 pe-0 text-white" id="Register_email" placeholder="name@example.com"/>
                                        <label htmlFor="Register_email" class="Register_label global_fontColor--cream ps-0 pe-0 pt-0">Adresse e-mail</label>
                                    </div>
                                    <div className="form-floating mb-4">
                                        <input type="password" className="form-control global_bgColor--blackCyan Register_input ps-0 pe-0 text-white" id="Register_password" placeholder="• • • • • • • • •"/>
                                        <label htmlFor="Register_password" class="Register_label global_fontColor--cream ps-0 pe-0 pt-0">Mot de passe</label>
                                    </div>
                                </div>
                                <h1 className="h2 text-center font_lobster global_fontColor--cream mt-5 mb-5">Information personelles</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Register