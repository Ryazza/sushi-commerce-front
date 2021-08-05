import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import logoBigWhite from "../../../Assets/logo-big-white.png"
import menuImage from "../../../Assets/menu.png"
import userImage from "../../../Assets/utilisateur.png"
import cartImage from "../../../Assets/panier.png"
import './cart.css';
import axios from "axios";
import Me from "../../UserAccount/Me/me";
import Adress from "../../UserAccount/Adress/adress";
import Ordered from "../../UserAccount/Ordered/ordered";
import Panier from "../../UserAccount/Panier/panier";

const environnement = require('../../../Environment/environment')
const Env = environnement.environement

class Cart extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }

    }

    componentDidMount() {
        axios.get(Env.backBase + '/category/all')
            .then(res => {
                this.setState({category: res.data.category})
            })
            .catch(error =>
                console.log(error)
            );
    }





    render() {
        return (
            <Fragment>
    <div id={"cart"}>hello Cart World !</div>

            </Fragment>
        )
    }
}

export default Cart