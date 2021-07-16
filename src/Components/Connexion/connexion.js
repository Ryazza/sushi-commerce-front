import React, {Component, Fragment} from 'react';
import './connexion.css';


export default class Connexion extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navBar_mainContainer">
                    <div className="container-fluid">
                        <a href="#" className="navbar-brand p-0"><img src={process.env.PUBLIC_URL + '../../Assets/logo.png'}/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"                         aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"> </span>
                        </button>
                    </div>
                </nav>
                <div className="container col-6 font_Lobster" id="connexion">
                    <button className="col-6 connexionBtn">
                        Connexion
                    </button>
                    <button className="col-6 inscriptionBtn">
                        Inscription
                    </button>
                    <form id="connexionForm">
                        <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="formGroupEmailConnexion" placeholder="name@example.com"/>
                            <label htmlFor="formGroupEmailConnexion">Adresse e-mail :</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="formGroupPwdConnexion"/>
                            <label htmlFor="formGroupPwdConnexion">Mot de passe :</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="formGroupRememberMe"/>
                                <label className="form-check-label" htmlFor="formGroupRememberMe">
                                    Se rappeler de moi
                                </label>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}