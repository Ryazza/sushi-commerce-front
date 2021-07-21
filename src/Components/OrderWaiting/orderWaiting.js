import React from "react"
import {Component, Fragment} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './orderWaiting.css'

export default class OrderWaiting extends Component{
    constructor(props) {
        super(props);

    }
    //
    // componentDidMount() {
    // }

    render() {
        return(
            <Fragment>
                <div className="Admin_order_waiting">
                    <div className="order_waiting_icone">
                        <p className="order_waiting_title">Commandes en préparation</p>
                    </div>
                    <div>
                        <form className="input-group orderWaiting_search rounded">
                            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"/>
                            <span className="input-group-text border-0" id="search-addon">
                                <button className="fas fa-search orderWaiting_search_btn"><FontAwesomeIcon icon={faSearch} /></button>
                            </span>
                        </form>
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