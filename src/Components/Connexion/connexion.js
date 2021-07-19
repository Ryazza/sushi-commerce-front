import React, {Component, Fragment} from 'react';
import './connexion.css';
import {Link} from "react-router-dom";
import logo from '../../Assets/logo.png';
export default class Connexion extends Component {

    constructor(props) {
        super(props);
        this.state = {email: "", password:""};
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }


    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password : event.target.value});
    }


    validateLogin(){
        let validate = {email:false, password: false};
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(this.state.email)) {
            validate.email = false;
        } else {
            validate.email = true;
        }
        if (this.state.password.length < 2) {
            validate.password = false;
        } else {
            validate.password = true;
        }
    }

    
    handleSubmitRegister(event) {
        event.preventDefault();
        let valid = this.validateLogin();
        if(valid === true) {
            let form = {
                email: this.state.email,
                password: this.state.password,
                gender: this.state.gender,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                birth: this.state.birth
            }
            //todo requete
        }
    }

    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navBar_mainContainer home__login">
                    <div className="container-fluid">
                        <Link href="#" className="navbar-brand p-0"><img className="logo" src={process.env.PUBLIC_URL + logo}/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"                         aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"> </span>
                        </button>
                    </div>
                </nav>

                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-6 Login_main mt-5 mb-5 pb-5">
                            <div className="row font_lobster text-center fs-2">
                                <div className="col-6 Login_connectBtn global_fontColor--cream pt-2 pb-2" >Connexion</div>
                                <Link className="col-6 Login_registerBtn global_fontColor--cream pt-2 pb-2" to="/register">Inscription</Link>
                            </div>
                            <div className="row justify-content-center mt-4">
                                <div className="col-8 pt-3 pb-3">
                                    <div className="form-floating mb-4">
                                        <input type="email" className="form-control global_bgColor--blackCyan Register_input ps-0 pe-0 text-white" id="Login_email" placeholder="name@example.com" onChange={this.handleChangeEmail}/>
                                        <label htmlFor="Login_email" className="Register_label global_fontColor--cream ps-0 pe-0 pt-0">Adresse e-mail</label>
                                    </div>
                                    <div className="form-floating mb-4">
                                        <input type="password" className="form-control global_bgColor--blackCyan Register_input ps-0 pe-0 text-white" id="Login_password" placeholder="• • • • • • • • •" onChange={this.handleChangePassword}/>
                                        <label htmlFor="Login_password" className="Register_label global_fontColor--cream ps-0 pe-0 pt-0">Mot de passe</label>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-3">
                                    <button className="btn btn-default col-2 Login_btn" onClick={this.handleSubmitRegister}>Se connecter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}