import React, {Component, Fragment} from 'react';
import './cart.css';
import axios from "axios";

const environnement = require('../../../Environment/environment')
const Env = environnement.environement

class Cart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            myCart: []
        }

    }

    componentDidMount() {
        const cart = localStorage.getItem("cart");
        let myCart;
        if (!cart) {
            myCart = [];
        } else {
            myCart = JSON.parse(cart);
        }
        this.setState({myCart: myCart})

    }

    passOrder() {
        axios.get(Env.backBase + '/category/all')
            .then(res => {
                this.setState({category: res.data.category})
            })
            .catch(error =>
                console.log(error)
            );
    }

    render() {
        let cart = [];

        if (this.state.myCart) {
            cart = this.state.myCart.map((product, index) => {
                return (
                    <div>
                        {JSON.stringify(product)}
                        <tr>nom : {product.name}</tr>
                        <tr>prix : {product.price}</tr>
                        <tr>stock :
                            <input className="saison-score pastille" type="number" min="0"
                                   max="100" placeholder={product.qty} size="2"/>
                        </tr>


                        <hr/>
                    </div>
                )
            })
        }
        return (
            <Fragment>
                <div className="Popup">hello Cart World !
                    <div>{cart}</div>
                </div>

            </Fragment>
        )
    }
}

export default Cart