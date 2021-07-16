import React, {Component, Fragment} from 'react';

import './myAccount.css';

class MyAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {me: true, adress: false, ordered: false, panier: false}
    }

    componentDidMount() {

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
                                <button className="btn btn-default text-center pt-2 pb-2">Mes informations</button>
                            </div>
                            <div className="row myAccount_separatorMenu">
                                <button className="btn btn-default text-center pt-2 pb-2">Mes adresses</button>
                            </div>
                            <div className="row myAccount_separatorMenu">
                                <button className="btn btn-default text-center pt-2 pb-2">Mes commandes</button>
                            </div>
                            <div className="row myAccount_separatorMenu">
                                <button className="btn btn-default text-center pt-2 pb-2">Mon panier</button>
                            </div>
                        </div>
                        <div className="col-8">
                            {(() => {
                                switch (true) {
                                    case me:   return "#FF0000";
                                    case adress: return "#00FF00";
                                    case ordered:  return "#0000FF";
                                    case panier:  return "#0000FF";
                                    default:      return "#FFFFFF";
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