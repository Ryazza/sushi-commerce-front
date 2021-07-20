import React from "react"
import {Component, Fragment} from "react";


export default class OrderPaid extends Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {
    }

    render() {
        return(
            <Fragment>
                <div className="Admin_order_paid">
                    <div className="order_paid_icone">
                       <p>Commande payées</p>
                    </div>
                    <div>
                        <div className="input-group rounded">
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"/>
                        <span className="input-group-text border-0" id="search-addon">
                            <i className="fas fa-search"/>
                        </span>
                    </div>
                        <div className="Admin_orderPaid_container">

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}