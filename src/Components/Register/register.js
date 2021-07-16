import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

import './register.css';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = { email: "", password: "", gender: "man", firstName: "", lastName: "", birth: ""};

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeBirthday = this.handleChangeBirthday.bind(this);
        this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password : event.target.value});
    }

    handleChangeGender(event) {
        this.setState({gender : event.target.value});
    }

    handleChangeFirstName(event) {
        this.setState({firstName : event.target.value});
    }

    handleChangeLastName(event) {
        this.setState({lastName : event.target.value});
    }

    handleChangeBirthday(event) {
        this.setState({birth : event.target.value});
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validateForm(){
        let validate = {email: false, password: false, firstName: false, lastName: false};
        let emailInput = document.getElementById('Register_email');
        let passwordInput = document.getElementById('Register_password');
        let firstNameInput = document.getElementById('Register_firstName');
        let lastNameInput = document.getElementById('Register_lastName');
        let birthInput = document.getElementById('Register_birth');

        if (!this.validateEmail(this.state.email)) {
            emailInput.classList.add("is-invalid");
            emailInput.classList.remove("is-valid");
            validate.email = false;
        } else {
            emailInput.classList.remove("is-invalid");
            emailInput.classList.add("is-valid");
            validate.email = true;
        }
        if (this.state.password.length < 2) {
            passwordInput.classList.add("is-invalid");
            passwordInput.classList.remove("is-valid");
            validate.password = false;
        } else {
            passwordInput.classList.remove("is-invalid");
            passwordInput.classList.add("is-valid");
            validate.password = true;
        }
        if (this.state.firstName.length < 2) {
            firstNameInput.classList.add("is-invalid");
            firstNameInput.classList.remove("is-valid");
            validate.firstName = false;
        } else {
            firstNameInput.classList.remove("is-invalid");
            firstNameInput.classList.add("is-valid");
            validate.firstName = true;
        }
        if (this.state.lastName.length < 2) {
            lastNameInput.classList.add("is-invalid");
            lastNameInput.classList.remove("is-valid");
            validate.lastName = false;
        } else {
            lastNameInput.classList.remove("is-invalid");
            lastNameInput.classList.add("is-valid");
            validate.lastName = true;
        }
        if (!this.state.birth) {
            birthInput.classList.add("is-invalid");
            birthInput.classList.remove("is-valid");
            validate.birth = false;
        } else {
            birthInput.classList.remove("is-invalid");
            birthInput.classList.add("is-valid");
            validate.birth = true;
        }
        return !(validate.email === false || validate.password === false || validate.firstName === false || validate.lastName === false || validate.birth === false)
    }

    handleSubmitRegister(event) {
        event.preventDefault();
        let valid = this.validateForm();
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
                        <div className="col-6 Register_main mt-5 mb-5 pb-5">
                            <div className="row font_lobster text-center fs-2">
                                <Link className="col-6 Register_connectBtn global_fontColor--cream pt-2 pb-2" to="/login">Connexion</Link>
                                <div className="col-6 Register_registerBtn global_fontColor--cream pt-2 pb-2">Inscription</div>
                            </div>
                            <div className="row justify-content-center mt-4">
                                <h1 className="h2 text-center font_lobster global_fontColor--cream mb-5">Identifiants</h1>
                                <div className="col-8 pt-3 pb-3">
                                    <div className="form-floating mb-4">
                                        <input type="email" className="form-control global_bgColor--blackCyan Register_input ps-0 pe-0 text-white" id="Register_email" placeholder="name@example.com" onChange={this.handleChangeEmail}/>
                                        <label htmlFor="Register_email" className="Register_label global_fontColor--cream ps-0 pe-0 pt-0">Adresse e-mail</label>
                                    </div>
                                    <div className="form-floating mb-4">
                                        <input type="password" className="form-control global_bgColor--blackCyan Register_input ps-0 pe-0 text-white" id="Register_password" placeholder="• • • • • • • • •" onChange={this.handleChangePassword}/>
                                        <label htmlFor="Register_password" className="Register_label global_fontColor--cream ps-0 pe-0 pt-0">Mot de passe</label>
                                    </div>
                                </div>
                                <h1 className="h2 text-center font_lobster global_fontColor--cream mt-5 mb-5">Information personelles</h1>
                                <div className="col-8 pt-3 pb-3">
                                    <label className="Register_label global_fontColor--cream mb-4">Civilité</label>
                                    <div className="form-floating row mb-4">
                                        <div className="col-4">
                                            <input type='radio' name="gender" id="man" defaultChecked value={"man"} onChange={this.handleChangeGender}/>
                                            <label htmlFor="man" className="ms-2 global_fontColor--cream">Homme</label>
                                        </div>
                                        <div className="col-4">
                                            <input type='radio' name="gender" id="women" value={"woman"} onChange={this.handleChangeGender}/>
                                            <label htmlFor="women" className="ms-2 global_fontColor--cream">Femme</label>
                                        </div>
                                        <div className="col-4">
                                            <input type='radio' name="gender" id="other" value={"other"} onChange={this.handleChangeGender}/>
                                            <label htmlFor="other" className="ms-2 global_fontColor--cream">Autres</label>
                                        </div>
                                    </div>
                                    <div className="form-floating mb-4">
                                        <input type="text" className="form-control global_bgColor--blackCyan Register_input ps-0 pe-0 text-white" id="Register_firstName" placeholder="Prénom" onChange={this.handleChangeFirstName}/>
                                        <label htmlFor="Register_firstName" className="Register_label global_fontColor--cream ps-0 pe-0 pt-0">Prénom</label>
                                    </div>
                                    <div className="form-floating mb-4">
                                        <input type="text" className="form-control global_bgColor--blackCyan Register_input ps-0 pe-0 text-white" id="Register_lastName" placeholder="Nom" onChange={this.handleChangeLastName}/>
                                        <label htmlFor="Register_lastName" className="Register_label global_fontColor--cream ps-0 pe-0 pt-0">Nom</label>
                                    </div>
                                    <div className="form-floating mb-4">
                                        <input type="date" className="form-control global_bgColor--blackCyan Register_input ps-0 pe-0 text-white" id="Register_birth" placeholder="01/01/1970" onChange={this.handleChangeBirthday}/>
                                        <label htmlFor="Register_birth" className="Register_label global_fontColor--cream ps-0 pe-0 pt-0">Date de naissance</label>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-3">
                                    <button className="btn btn-default col-2 Register_btn" onClick={this.handleSubmitRegister}>Valider</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Register