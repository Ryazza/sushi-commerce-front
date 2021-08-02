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

    render() {
        let itemsMap = []
        if(this.state.items) {
            itemsMap = this.state.items.items.map((item, index) => {
                return (
                    <div className="row bg-white m-2 mt-3 p-2 rounded-3 subCatDetail_item" key={index}>
                        <div className="h5 pb-2">{item.name}</div>
                    </div>
                )
            })
        }
        return (
            <Fragment>
                <div className="container-fluid mt-3">
                    <div className="row m-2 rounded-3 subCatDetail_item" >
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
                            Meilleur vente
                        </div>
                        <div className="col-2">
                            Filtre coming soon
                        </div>
                        <div className="col-8">
                            {itemsMap}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}