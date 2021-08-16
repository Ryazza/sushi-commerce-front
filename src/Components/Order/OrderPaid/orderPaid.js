import React from "react"
import {Component, Fragment} from "react";
import './orderPaid.css'

export default class OrderPaid extends Component{


    render() {
        return(
            <Fragment>
                <div className="Admin_order_paid">
                    <div className="order_paid_icone">
                       <p className="order_paid_title">Commandes payées <i className="fas fa-euro-sign"></i></p>
                    </div>
                    <div>
                        <div className="Admin_orderPaid_container">
                            <div className="orderPaid_data" ></div>
                            <div className="orderPaid_data" ></div>
                            <div className="orderPaid_data" ></div>
                            <div className="orderPaid_data" ></div>
                            <div className="orderPaid_data" ></div>
                            <div className="orderPaid_data" ></div>
                            <div className="orderPaid_data" ></div>
                            <div className="orderPaid_data" ></div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}
