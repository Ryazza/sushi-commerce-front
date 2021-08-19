import React from "react"
import {Component, Fragment} from "react";
import './takeAnOrder.css'
import Cart from "../../Components/Navigation/Cart/cart";
export default class TakeAnOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myCart: [],
            cartPrice: 0,
            cartSize: 0
        }
    }
    componentDidMount() {
        let storage = this.checkLocalStorage();
        console.log("mount >>", storage)
        this.setState({
            myCart: storage.cart,
            cartPrice: storage.price,
            cartSize: storage.size
        })



}
    checkLocalStorage() {
        const cart = localStorage.getItem("cart");
        const cartPrice = localStorage.getItem("cartPrice");
        const cartSize = localStorage.getItem("cartSize");
        let myCart;
        if (!cart) {
            myCart = [];
        } else {
            myCart = JSON.parse(cart);
        }
        let myCartPrice;
        if (!cartPrice) {
            myCartPrice = 0;
        } else {
            myCartPrice = parseInt(cartPrice);
        }
        let myCartSize;
        if (!cartSize) {
            myCartSize = 0;
        } else {
            myCartSize = parseInt(cartSize);
        }
        return {cart: myCart, size: myCartSize, price: myCartPrice}

    }

    render() {
        console.log(this.state.cartPrice)
        let totalPrice = this.state.cartPrice;
        let totalProducts = this.state.cartSize;
        return(
            <Fragment>
                <Cart/>
                nombre d'articles : 2345
                prix total :654
            </Fragment>
        )
    }

}
