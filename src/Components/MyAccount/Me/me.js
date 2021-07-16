import React, {Component, Fragment} from 'react';

import './me.css';

class Me extends Component {

    constructor(props) {
        super(props);
        //todo state a modifier quand les requete vers l'api seront possible
        this.state = {gender: "man", firstName: "monPrénom", lastName: "monNom"}
    }

    componentDidMount() {
        //todo ajout soit de la requete get soit de la récupération si Set dans les cookie ou le local storage puis VVV

        document.getElementById(this.state.gender).setAttribute('checked', true)
        document.getElementById("me_prenom").setAttribute('value', this.state.firstName)
        document.getElementById("me_nom").setAttribute('value', this.state.lastName)
    }

    render() {
        return (
            <Fragment>
                <div className="row ms-5">
                    <h1 className='fs-3 text-center font_lobster mb-3 pe-5'>Informations Personnelles</h1>
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
                                <input type="text" className="form-control" id="me_prenom"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-11">
                                <label htmlFor="me_nom" className="form-label">Date de naissance</label>
                                <input type="date" className="form-control" id="me_nom"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Me