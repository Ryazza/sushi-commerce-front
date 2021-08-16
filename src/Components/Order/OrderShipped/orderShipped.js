import React from "react";
import {Component, Fragment} from "react";
import './orderShipped.css'

export default class OrderShipped extends Component {

    render() {
        return (
            <Fragment>
                <div className="Admin_order_shipped">
                    <div className="order_shipped_icone">
                        <p className="order_shipped_title">Commandes expédiées<i className="fas fa-shipping-fast"></i></p>
                    </div>
                    <div>
                    <div className="Admin_orderShipped_container">
                        <div className="orderShipped_data" ></div>
                        <div className="orderShipped_data" ></div>
                        <div className="orderShipped_data" ></div>
                        <div className="orderShipped_data" ></div>
                        <div className="orderShipped_data" ></div>
                        <div className="orderShipped_data" ></div>
                        <div className="orderShipped_data" ></div>
                        <div className="orderShipped_data" ></div>
                    </div>
                </div>
                </div>
            </Fragment>
        )
    }
}

