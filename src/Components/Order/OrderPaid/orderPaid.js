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
                        <form className="input-group orderPaid_search rounded">
                            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"/>
                            <span className="input-group-text border-0" id="search-addon">
                                <button className="orderPaid_search_btn"><i className={"fas fa-search"}></i></button>
                            </span>
                        </form>
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
