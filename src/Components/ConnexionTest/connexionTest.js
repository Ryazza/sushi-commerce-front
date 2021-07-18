import React, {Component, Fragment} from 'react';
import './connexionTest.css';
import {Link} from "react-router-dom";
import logoBigBlack from '../../Assets/logo-big-black.png';

export default class ConnexionTest extends Component {

    render() {
        return (
            <Fragment>
                <div class="home_page d-flex flex-row font_cabin">
                    <div className="home_page_left col-6">
                        <Link to="/loginTest" className="navbar-brand p-0"><img className="logo" src={process.env.PUBLIC_URL + logoBigBlack}/></Link>
                    </div>
                    <div className="container global_fontColorTest--charcoal">
                        <div className="row justify-content-center ">
                            <div className="col-6 mt-5 mb-5 home__main global_fontColorTestCTA--whiteSmoke pb-5 ">
                                <div className="row font_montserrat text-center fs-2">
                                    <div className="col-6 Login_connectBtn  pt-2 pb-2" >Connexion</div>
                                    <Link className="col-6 Login_registerBtn  pt-2 pb-2" to="/register">Inscription</Link>
                                </div>
                                <div className="row justify-content-center mt-4">
                                    <div className="col-8 pt-3 pb-3">
                                        <div className="form-floating mb-4">
                                            <input type="email" className="form-control global_fontColorTestCTA--whiteSmoke Login_input ps-0 pe-0 text-white" id="Login_email" placeholder="name@example.com" onChange={this.handleChangeEmail}/>
                                            <label htmlFor="Login_email" className="Login_label  ps-0 pe-0 pt-0">Adresse e-mail</label>
                                        </div>
                                        <div className="form-floating mb-4">
                                            <input type="password" className="form-control global_fontColorTestCTA--whiteSmoke  Login_input ps-0 pe-0 text-white" id="Login_password" placeholder="• • • • • • • • •" onChange={this.handleChangePassword}/>
                                            <label htmlFor="Login_password" className="Login_label  ps-0 pe-0 pt-0">Mot de passe</label>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center  mt-3">
                                        <button className="btn btn-default col-2 global_fontColorTestCTA--cerulean home__login_btn" onClick={this.handleSubmitLogin}>Se connecter</button>
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