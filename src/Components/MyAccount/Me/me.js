import React, {Component, Fragment} from 'react';
import DeleteAccount from "./DeleteAccount/deleteAccount";
import './me.css';

class Me extends Component {

    constructor(props) {
        super(props);
        //todo state a modifier quand les requete vers l'api seront possible
        this.state = {
            gender: "man",
            firstName: "monPrénom",
            lastName: "monNom",
            email: "exemple@email.com",
            birth: "1970-01-01",
            newMail: "",
            newBirth: "",
            oldMdp: "",
            newMdp: ""
        }

        this.handleMeChangeMail = this.handleMeChangeMail.bind(this);
        this.handleMeChangeBirth = this.handleMeChangeBirth.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.handleSubmitMe = this.handleSubmitMe.bind(this);
        this.handleSubmitMeMDP = this.handleSubmitMeMDP.bind(this);
        this.handleChangeOldMDP = this.handleChangeOldMDP.bind(this);
        this.handleChangeNewMDP = this.handleChangeNewMDP.bind(this);
    }

    componentDidMount() {
        //todo ajout soit de la requete get soit de la récupération si Set dans les cookie ou le local storage puis VVV

        document.getElementById(this.state.gender).setAttribute('checked', true)
        document.getElementById("me_prenom").setAttribute('value', this.state.firstName)
        document.getElementById("me_nom").setAttribute('value', this.state.lastName)
        document.getElementById("me_mail").setAttribute('value', this.state.email)
        document.getElementById("me_birth").setAttribute('value', this.state.birth)
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    handleMeChangeMail(event) {
        this.setState({newMail: event.target.value})
    }

    handleMeChangeBirth(event) {
        this.setState({newBirth: event.target.value})
    }

    handleSubmitMe(event) {
        event.preventDefault();
        let bodyEmail = {email: ""}
        let bodyBirth = {birth: ""}

        if (this.state.newMail !== this.state.email && this.state.newMail.trim() !== "") {
            let validEmail = this.validateEmail(this.state.newMail);
            if (validEmail === true) {
                document.getElementById('me_mail').classList.add('is-valid')
                document.getElementById('me_mail').classList.remove('is-invalid')
                bodyEmail.email = this.state.newMail
            } else {
                document.getElementById('me_mail').classList.add('is-invalid')
                document.getElementById('me_mail').classList.remove('is-valid')
            }
        }
        if (this.state.birth !== this.state.newBirth && this.state.newBirth.trim() !== "") {

            document.getElementById('me_birth').classList.add('is-valid');
            document.getElementById('me_birth').classList.remove('is-invalid');
            bodyBirth.birth = this.state.newBirth;
        }
        if (bodyEmail.email.trim() !== "") {
            console.log("requete de changement de mail");
        }
        if (bodyBirth.birth.trim() !== "") {
            console.log("requete de changement de birth");
        }
    }

    handleChangeOldMDP(event) {
        this.setState({oldMdp: event.target.value});
    }

    handleChangeNewMDP(event) {
        this.setState({newMdp: event.target.value});
    }

    handleSubmitMeMDP(event) {
        event.preventDefault();
        if (this.state.oldMdp !== this.state.newMdp && this.state.newMdp !== "") {
            console.log("En attente de la requete de changement de mot de passe")
        } else {
            console.log(this.state.oldMdp)
            console.log(this.state.newMdp)
            document.getElementById('me_oldMDP').classList.add('is-invalid');
            document.getElementById('me_oldMDP').classList.remove('is-valid');
            document.getElementById('me_newMDP').classList.add('is-invalid');
            document.getElementById('me_newMDP').classList.remove('is-valid');
        }
    }

    DeleteAccount() {

    }

    render() {
        return (
            <Fragment>
                <div className="row ms-5">
                    <h1 className='fs-3 text-center font_lobster mb-3 pe-5 me_title'>Informations Personnelles</h1>
                    <div className="col-6">
                        <div className="row mb-4" id="Me_GenderInput--style">
                            <div className="row justify-content-center mb-3">
                                <div className="fs-6 pb-2 me_disabled">Civilité</div>
                            </div>
                            <div className="col-3">
                                <input type='radio' name="gender" id="man" value={"man"} disabled/>
                                <label htmlFor="man" className="ms-2 me_disabled">Homme</label>
                            </div>
                            <div className="col-3">
                                <input type='radio' name="gender" id="women" value={"woman"} disabled/>
                                <label htmlFor="women" className="ms-2 me_disabled">Femme</label>
                            </div>
                            <div className="col-3">
                                <input type='radio' name="gender" id="other" value={"other"} disabled/>
                                <label htmlFor="other" className="ms-2 me_disabled">Autres</label>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-11">
                                <label htmlFor="me_prenom" className="form-label me_disabled">Prénom</label>
                                <input type="text" className="form-control me_disabled" id="me_prenom" disabled/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-11">
                                <label htmlFor="me_nom" className="form-label me_disabled">Nom</label>
                                <input type="text" className="form-control me_disabled" id="me_nom" disabled/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 pt-5 mt-5">
                        <div className="row mb-3">
                            <div className="col-11">
                                <label htmlFor="me_prenom" className="form-label">Adresse e-mail</label>
                                <input type="text" className="form-control" id="me_mail" onChange={this.handleMeChangeMail}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-11">
                                <label htmlFor="me_nom" className="form-label">Date de naissance</label>
                                <input type="date" className="form-control" id="me_birth" onChange={this.handleMeChangeBirth}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-4 mb-2">
                    <div className="col-2 text-center">
                        <button className="btn btn-default me_btnSubmit font_lobster" onClick={this.handleSubmitMe}>Valider</button>
                    </div>
                </div>
                <div className="row justify-content-center mb-2">
                    <div className="col-3">
                        <hr/>
                    </div>
                </div>
                <div className="row justify-content-center ms-5">
                    <h1 className='fs-3 text-center font_lobster mb-4 pe-5 me_title'>Changer de mot de passe</h1>
                    <div className="col-6">
                        <div className="row mb-3">
                            <div className="col-11">
                                <label htmlFor="me_nom" className="form-label">Mot de passe actuel</label>
                                <input type="password" className="form-control" id="me_oldMDP" placeholder="• • • • • • • • •" onChange={this.handleChangeOldMDP}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-11">
                                <label htmlFor="me_nom" className="form-label">Nouveau mot de passe</label>
                                <input type="password" className="form-control" id="me_newMDP" placeholder="• • • • • • • • •" onChange={this.handleChangeNewMDP}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-4 mb-5">
                    <div className="col-2 text-center">
                        <button className="btn btn-default me_btnSubmit font_lobster" onClick={this.handleSubmitMeMDP}>Valider</button>
                    </div>
                </div>
                <div className="row justify-content-center mb-2">
                    <div className="col-3">
                        <hr/>
                    </div>
                </div>
                <DeleteAccount />
            </Fragment>
        )
    }
}

export default Me