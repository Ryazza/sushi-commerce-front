import React from "react"
import {Component, Fragment} from "react";
import './orderWaiting.css'

export default class OrderWaiting extends Component{

    render() {
        return(
            <Fragment>
                <div className="Admin_order_waiting">
                    <div className="order_waiting_icone">
                        <p className="order_waiting_title">Commandes en préparation <i className="fas fa-history"></i></p>
                    </div>
                    <div>
                    <div className="Admin_orderWaiting_container">
                        <div className="orderWaiting_data" ></div>
                        <div className="orderWaiting_data" ></div>
                        <div className="orderWaiting_data" ></div>
                        <div className="orderWaiting_data" ></div>
                        <div className="orderWaiting_data" ></div>
                        <div className="orderWaiting_data" ></div>
                        <div className="orderWaiting_data" ></div>
                        <div className="orderWaiting_data" ></div>
                    </div>
                </div>
                </div>
            </Fragment>
        )
    }

}