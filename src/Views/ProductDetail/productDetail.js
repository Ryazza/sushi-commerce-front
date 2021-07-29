import React from "react";
import {Component, Fragment} from "react";
import {Link} from "react-router-dom";
import {oneProduct} from "../../Environment/object";

export default class ChangeProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {product: {}}
    }

    componentDidMount() {
        this.setState({product: oneProduct})
    }

    render() {
        return (
            <Fragment>
                <div className="container-fluid mt-3">
                    <div className="row justify-content-center bg-light m-2">
                        <div className="row">
                            <div aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Let's shop</Link></li>
                                    <li className="breadcrumb-item"><Link to={"/" + this.state.product.category}>{this.state.product.category}</Link></li>
                                    <li className="breadcrumb-item"><Link to={"/" + this.state.product.subCategory}>{this.state.product.subCategory}</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{this.state.product.name}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}