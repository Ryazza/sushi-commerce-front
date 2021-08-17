import React from "react";
import {Component, Fragment} from "react";
import './manageUsers.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import NavbarAdmin from "../../../Components/Admin/NavbarAdmin/navbarAdmin";
import DisplayInfo from "../../../Components/Admin/ManageUsers/DisplayInfo/displayInfo";

export default class ManageUsers extends Component {

    render() {
        return(
            <Fragment>
                <NavbarAdmin/>
                <div className="container ManageUsers global_bgColor--charcoal col-6 font_cabin text-white">
                    <form className="input-group ManageUsers_search rounded">
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"/>
                        <span className="input-group-text border-0" id="search-addon">
                                <button className="ManageUsers_search_btn"><FontAwesomeIcon icon={faSearch} /></button>
                            </span>
                    </form>
                    <h2 className="text-center font_montserrat">Fiche utilisateur</h2>
                    <div className="ManageUsers_container_info container">
                        <DisplayInfo/>
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
                            <input type="button" className="ManageUsers_pay_btn global_fontColor--whiteSmoke global_bgColor--blueSky font_montserrat" value="Valider les choix"/>
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}
