import React, {Component, Fragment} from 'react';
import Me from "./Me/me"

import './myAccount.css';

class MyAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {me: true, adress: false, ordered: false, panier: false}

        this.handleChangeForMe = this.handleChangeForMe.bind(this);
        this.handleChangeForAdress = this.handleChangeForAdress.bind(this);
        this.handleChangeForOrdered = this.handleChangeForOrdered.bind(this);
        this.handleChangeForPanier = this.handleChangeForPanier.bind(this);
    }

    handleChangeForMe() {
        this.setState({me: true, adress: false, ordered: false, panier: false})
    }

    handleChangeForAdress() {
        this.setState({me: false, adress: true, ordered: false, panier: false})
    }

    handleChangeForOrdered() {
        this.setState({me: false, adress: false, ordered: true, panier: false})
    }

    handleChangeForPanier() {
        this.setState({me: false, adress: false, ordered: false, panier: true})
    }

    render() {
        let me = this.state.me;
        let adress = this.state.adress;
        let ordered = this.state.ordered;
        let panier = this.state.panier;

        return (
            <Fragment>
                <div className="container-fluid mt-5">
                    <div className="row justify-content-center">
                        <div className="col-2 myAccount_leftMenu pt-2">
                            <div className="myAccount_me text-center">Nom Prénom</div>
                            <div className="text-center text-danger mt-2 mb-4"><img src={process.env.PUBLIC_URL + '/assets/icons8-fermer-96.png'} alt="Boutton de déconnection" class="myAccount_img--disconnect"/> Me déconnecter</div>
                            <div className="row myAccount_separatorMenu">
                                <button className="btn btn-default text-center pt-2 pb-2" onClick={this.handleChangeForMe}>Mes informations</button>
                            </div>
                            <div className="row myAccount_separatorMenu">
                                <button className="btn btn-default text-center pt-2 pb-2" onClick={this.handleChangeForAdress}>Mes adresses</button>
                            </div>
                            <div className="row myAccount_separatorMenu">
                                <button className="btn btn-default text-center pt-2 pb-2" onClick={this.handleChangeForOrdered}>Mes commandes</button>
                            </div>
                            <div className="row myAccount_separatorMenu">
                                <button className="btn btn-default text-center pt-2 pb-2" onClick={this.handleChangeForPanier}>Mon panier</button>
                            </div>
                        </div>
                        <div className="col-8">
                            {(() => {
                                switch (true) {
                                    case me:   return (<Me />);
                                    case adress: return "#00FF00";
                                    case ordered:  return "#0000FF";
                                    case panier:  return "#0000FF";
                                    default:      return (<Me />);
                                }
                            })()}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MyAccount