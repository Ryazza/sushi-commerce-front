import React, {Component, Fragment} from 'react';
import Me from "./Me/me"
import Adress from "./Adress/adress"
import Ordered from "./Ordered/ordered"
import Panier from "./Panier/panier"

import './myAccount.css';

class MyAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {me: true, adress: false, ordered: false, panier: false}

        this.handleChangeForMe = this.handleChangeForMe.bind(this);
        this.handleChangeForAdress = this.handleChangeForAdress.bind(this);
        this.handleChangeForOrdered = this.handleChangeForOrdered.bind(this);
        this.handleChangeForPanier = this.handleChangeForPanier.bind(this);
        this.handleDisconnect = this.handleDisconnect.bind(this);
    }

    componentDidMount() {
        if (this.state.me === true) document.getElementById('myAccount_btnMe').classList.add('myAccount_selectedBtn');
    }

    componentDidUpdate() {
        if (this.state.me === true) document.getElementById('myAccount_btnMe').classList.add('myAccount_selectedBtn');
        else document.getElementById('myAccount_btnMe').classList.remove('myAccount_selectedBtn');
        if (this.state.adress === true) document.getElementById('myAccount_btnAdress').classList.add('myAccount_selectedBtn');
        else document.getElementById('myAccount_btnAdress').classList.remove('myAccount_selectedBtn');
        if (this.state.ordered === true) document.getElementById('myAccount_btnOrdered').classList.add('myAccount_selectedBtn');
        else document.getElementById('myAccount_btnOrdered').classList.remove('myAccount_selectedBtn');
        if (this.state.panier === true) document.getElementById('myAccount_btnPanier').classList.add('myAccount_selectedBtn');
        else document.getElementById('myAccount_btnPanier').classList.remove('myAccount_selectedBtn');
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

    handleDisconnect(){
        console.log("Non implémenté l.54 myAccount.js Déconection")
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
                        <div className="col-2 pt-2">
                            <div className="row myAccount_leftMenu justify-content-center">
                                <div className="myAccount_me text-center">Nom Prénom</div>
                                <div className="row justify-content-center">
                                    <button className=" btn btn-default text-center text-danger mb-2" onClick={this.handleDisconnect}>
                                        <img src={process.env.PUBLIC_URL + '/assets/icons8-fermer-96.png'} alt="Boutton de déconnection" className="myAccount_img--disconnect"/>
                                        Me déconnecter
                                    </button>
                                </div>
                                <div className="row myAccount_separatorMenu" id="myAccount_btnMe">
                                    <button className="btn btn-default text-center pt-2 pb-2" onClick={this.handleChangeForMe}>Mes informations</button>
                                </div>
                                <div className="row myAccount_separatorMenu" id="myAccount_btnAdress">
                                    <button className="btn btn-default text-center pt-2 pb-2" onClick={this.handleChangeForAdress}>Mes adresses</button>
                                </div>
                                <div className="row myAccount_separatorMenu" id="myAccount_btnOrdered">
                                    <button className="btn btn-default text-center pt-2 pb-2" onClick={this.handleChangeForOrdered}>Mes commandes</button>
                                </div>
                                <div className="row myAccount_separatorMenu" id="myAccount_btnPanier">
                                    <button className="btn btn-default text-center pt-2 pb-2" onClick={this.handleChangeForPanier}>Mon panier</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
                            {(() => {
                                switch (true) {
                                    case me:
                                        return (<Me/>);
                                    case adress:
                                        return (<Adress/>);
                                    case ordered:
                                        return (<Ordered/>);
                                    case panier:
                                        return (<Panier/>);
                                    default:
                                        return (<Me/>);
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