import React from "react";
import {Component, Fragment} from "react";


export default class DisplayInfo extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return(
            <Fragment>
                <div className="ManageUsers_info_profil">
                    <fieldset disabled>
                        <div className="form-group row ManageUsers_field_input">
                            <label htmlFor="disabledTextInput " className="font_montserrat col-form-label col-2">Nom :</label>
                            <input type="text" className="col-8"/>
                        </div>
                        <div className="form-group row ManageUsers_field_input">
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
            </Fragment>
        )
    }

}


