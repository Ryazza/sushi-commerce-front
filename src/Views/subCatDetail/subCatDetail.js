import React, {Component, Fragment} from 'react';
import {productByCategory} from '../../Environment/object'
import {Link} from "react-router-dom";
import './subCatDetail.css'

export default class SubCatDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {items: null, loading: false}
    }

    componentDidMount() {
        this.setState({items: productByCategory})
    }

    displayReductPrice(item) {
        if (item.events.solde !== null) {
            let reduction = (item.price * item.events.solde) / 100;
            let realPrice = item.price - reduction;
            return (
                <Fragment>
                    <div className="row text-center text-danger">
                        <span className="h2">{realPrice} €</span>
                    </div>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <h1 className="text-center text-danger mt-5 mb-0">{item.price} €</h1>
                </Fragment>
            )
        }
    }

    displayBadgeProduct(events){
        let newProduct = events.new;
        let soldePercent = events.solde;
        let serialEnding = events.serialEnding;
    }

    render() {
        let itemsMap = []
        if(this.state.items) {
            itemsMap = this.state.items.items.map((item, index) => {
                return (
                    <div className="row bg-white m-2 mt-3 p-2 rounded-3 subCatDetail_item" key={index}>
                        <div className="col-2">
                            <img src={item.bigPicture} className="img-fluid" style={{"width" : "70%"}} alt=""/>
                        </div>
                        <div className="col-8 pt-3">
                            <div className="row">{this.displayBadgeProduct(item.events)}</div>
                            <div className="row h5">{item.name}</div>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center">
                            {this.displayReductPrice(item)}
                        </div>
                    </div>
                )
            })
        }
        return (
            <Fragment>
                <div className="container-fluid mt-3">
                    <div className="row rounded-3 subCatDetail_item" >
                        <div className="row m-0 p-2 subCatDetail_breadcrumb bg-light">
                            <div aria-label="breadcrumb">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><Link className="subCatDetail_LinkBreadcrumb" to="/">Let's shop</Link></li>
                                    <li className="breadcrumb-item"><Link className="subCatDetail_LinkBreadcrumb" to="/">test</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">test</li>
                                </ol>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                Meilleur vente
                            </div>
                        </div>
                        <div className="col-2">
                            Filtre coming soon
                        </div>
                        <div className="col-10">
                            {itemsMap}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}