import React from "react";
import {Component, Fragment} from "react";
import './manageUsers.css';

export default class ManageUsers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Fragment>
                <div className="container ManageUsers global_bgColor--charcoal col-6 font_cabin text-white">
                    <div className="input-group">
                        <div className="form-outline">
                            <input type="search" id="form1" className="form-control"/>
                            <label className="form-label" htmlFor="form1">Search</label>
                        </div>
                        <button type="button" className="btn btn-primary">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <h2 className="text-center font_montserrat">Fiche utilisateur</h2>
                    <div className="ManageUsers_container_info container">
                        <div className="ManageUsers_info_profil">
                            <fieldset disabled>
                                <div class="form-group row ManageUsers_field_input">
                                    <label htmlFor="disabledTextInput " className="font_montserrat col-form-label col-2">Nom :</label>
                                    <input type="text" className="col-8"/>
                                </div>
                                <div class="form-group row ManageUsers_field_input">
                                    <label htmlFor="disabledTextInput" className="font_montserrat col-form-label col-2">Prénom :</label>
                                    <input type="text" className="col-8"/>
                                </div>
                                <div className="form-group row ManageUsers_field_input">
                                    <label htmlFor="disabledTextInput" className="font_montserrat col-form-label col-2">Prénom :</label>
                                    <input type="text" className="col-8"/>
                                </div>
                                <div className="form-group row ManageUsers_field_input">
                                    <label htmlFor="disabledTextInput" className="font_montserrat col-form-label col-2">E-mail :</label>
                                    <input type="text" className="col-8"/>
                                </div>
                                <div className="form-group row ManageUsers_field_input">
                                    <label htmlFor="disabledTextInput" className="font_montserrat col-form-label col-2">Téléphone :</label>
                                    <input type="text" className="col-8"/>
                                </div>
                                <div className="form-group row ManageUsers_field_input">
                                    <label htmlFor="disabledTextInput" className="font_montserrat col-form-label col-2">N° et voie :</label>
                                    <input type="text" className="col-8"/>
                                </div>
                                <div className="form-group row ManageUsers_field_input">
                                    <label htmlFor="disabledTextInput" className="font_montserrat col-form-label col-2">Code postal :</label>
                                    <input type="text" className="col-8"/>
                                </div>
                                <div className="form-group row ManageUsers_field_input">
                                    <label htmlFor="disabledTextInput" className="font_montserrat col-form-label col-2">Ville :</label>
                                    <input type="text" className="col-8"/>
                                </div>
                                <div className="form-group row ManageUsers_field_input">
                                    <label htmlFor="disabledTextInput" className="font_montserrat col-form-label col-2">Pays :</label>
                                    <input type="text" className="col-8"/>
                                </div>
                            </fieldset>
                        </div>
                        <div className="ManageUsers_info_orders">
                            <h4 className="font_montserrat">Historique des commandes :</h4>
                        </div>
                        <h4 className="font_montserrat">Méthodes de paiement :</h4>
                        <form className="ManageUsers_info_payement">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                       value="option1"/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">Paiement par carte</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                       value="option2"/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox2">Paypal</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
                                <label className="form-check-label" htmlFor="inlineCheckbox3">Virement bancaire</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox4"
                                       value="option2"/>
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Paiement 2x</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox5"
                                       value="option2"/>
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Paiement 3x</label>
                            </div>
                            <input type="button" className="ManageUsers_pay_btn global_fontColor--whiteSmoke global_fontColorCTA font_montserrat" value="Valider les choix"/>
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}