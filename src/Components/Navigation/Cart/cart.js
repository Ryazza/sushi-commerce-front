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
        this.changeQuantity=this.changeQuantity.bind(this)

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

    saveCart() {
        let forSave = JSON.stringify(this.state.myCart);
        localStorage.setItem("cart", forSave)
    }

    changeQuantity(e,id) {
        let product = this.state.myCart.find(el => el.id === id)
        let cart = this.state.myCart;
        cart.forEach((element) => {
            if (element === product) {
                element.qty = e.target.value
            }
        })
        console.log("value = ", this.state.value)
        console.log("cart = ", this.state.myCart)
        this.setState({myCart: cart})
        this.saveCart();
    }

    deleteProduct(e, id) {
        e.preventDefault();
        let cart = this.state.myCart;
        const ids = cart.map(el => el.id);
        let index = ids.indexOf(id)
        // let product = cart.find(el => el.id === id)
        cart.splice(index, 1)
        this.setState({myCart: cart})
        this.saveCart();

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
                        <tr>quantité :
                            <input onChange={(e) => this.changeQuantity(e,product.id)}
                                   className="saison-score pastille" type="number" min="1"
                                   max="100" placeholder={product.qty} size="2"/>
                        </tr>
                        <tr>
                            <button onClick={(e) => this.deleteProduct(e, product.id)}>suppr</button>
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