import React from "react";
import {Component, Fragment} from "react";
import {Link} from "react-router-dom";
import {oneProduct} from "../../Environment/object";
import './productDetail.css'
import {ImageGroup, Image} from 'react-fullscreen-image'


export default class ChangeProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {product: {}}
    }

    componentDidMount() {
        this.setState({product: oneProduct})
    }

    render() {
        let imageList = [];
        console.log(this.state.product.pictures)
        if (this.state.product.pictures) {
            imageList = this.state.product.pictures.map((item, index) => {
                return (
                    <li key={index}>
                        <Image src={item.url}/>
                    </li>
                    // <div className="col-2">
                    //     <Image key={index} src={item.url} className="miniImage"/>
                    // </div>
                )
            })
        }
        return (
            <Fragment>
                <div className="container-fluid mt-3">
                    <div className="row justify-content-center m-2 productDetail_container">
                        <div className="row m-0 p-2 productDetail_breadcrumb bg-light">
                            <div aria-label="breadcrumb">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><Link className="productDetail_LinkBreadcrumb" to="/">Let's shop</Link></li>
                                    <li className="breadcrumb-item"><Link className="productDetail_LinkBreadcrumb" to={"/" + this.state.product.category}>{this.state.product.category}</Link></li>
                                    <li className="breadcrumb-item"><Link className="productDetail_LinkBreadcrumb" to={"/" + this.state.product.subCategory}>{this.state.product.subCategory}</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{this.state.product.name}</li>
                                </ol>
                            </div>
                        </div>
                        <div className="row mt-4 mb-4">
                            <div className="col-4">
                                <img className="img-fluid p-5" src={this.state.product.bigPicture} alt=""/>
                            </div>
                            <div className="col-6 p-4">
                                <h1 className="fs-4">{this.state.product.name}</h1>
                                <h2 className="fs-5">Produit par {this.state.product.marque}</h2>
                                <div className="fs-6 mt-5 mb-5">{this.state.product.description}</div>
                                <div className="row">
                                    <ImageGroup>
                                        <ul className="images">
                                            {imageList}
                                        </ul>
                                    </ImageGroup>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="row bg-light p-3 productDetail_rightPart rounded-3">
                                    <h1 className="text-center text-danger mt-3">{this.state.product.price} €</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}