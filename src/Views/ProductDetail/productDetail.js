import React from "react";
import {Component, Fragment} from "react";
import {Link} from "react-router-dom";
import {oneProduct} from "../../Environment/object";
import './productDetail.css'
import {ImageGroup, Image} from 'react-fullscreen-image'


export default class ChangeProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {product: {}, reductedPrice: null, checked: true}
    }

    componentDidMount() {
        this.setState({product: oneProduct})
    }

    componentDidUpdate() {
        if (this.state.product.events.solde && this.state.checked) {
            this.setState({checked: false})
            let reduction = (this.state.product.price * this.state.product.events.solde) / 100;
            let realPrice = this.state.product.price - reduction;
            this.setState({reductedPrice: realPrice.toFixed(2)})
        }
    }

    render() {
        let imageList = [];
        let Avis = [];
        console.log(this.state.product.pictures)
        if (this.state.product.pictures) {
            imageList = this.state.product.pictures.map((item, index) => {
                return (
                    <li key={index}>
                        <Image src={item.url}/>
                    </li>
                )
            })
        }
        if (this.state.product.comment) {
            Avis = this.state.product.comment.map((item, index) => {
                return (
                    <div className="row bg-white m-2 mt-3 p-2 rounded-3 productDetail_comment" key={index}>
                        <div className="h5 pb-2">{item.titre}</div>
                        <div>{item.contenu}</div>
                    </div>
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
                                <img className="img-fluid p-1" src={this.state.product.bigPicture} alt=""/>
                            </div>
                            <div className="col-6 p-4">
                                <h1 className="fs-4 pb-2">{this.state.product.name}</h1>
                                <h2 className="fs-5">Produit par {this.state.product.brand}</h2>
                                <div className="fs-6 mt-5 mb-5">{this.state.product.description}</div>
                                <div className="row pt-5">
                                    <ImageGroup>
                                        <ul className="images">
                                            {imageList}
                                        </ul>
                                    </ImageGroup>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="row bg-light p-0 productDetail_rightPart rounded-3 justify-content-center">
                                    {(() => {
                                        if (this.state.product.available) {
                                            return (
                                                <div className="text-center bg-success text-white p-1">En Stock</div>
                                            )
                                        } else {
                                            return (
                                                <div className="text-center bg-danger text-white p-1">Epuisé</div>
                                            )
                                        }
                                    })()}
                                    {(() => {
                                        if (this.state.reductedPrice) {
                                            return (
                                                <Fragment>
                                                    <div className="row text-center text-danger  mt-5 mb-0 ">
                                                        <span className="h1 productDetail_textLine">{this.state.product.price} € <span className="badge rounded-pill bg-danger align-top productDetail_badgeReduction">-{this.state.product.events.solde}%</span></span>
                                                    </div>
                                                    <h1 className="text-center text-danger mb-0">{this.state.reductedPrice} €</h1>
                                                </Fragment>
                                            )
                                        } else {
                                            return (
                                                <Fragment>
                                                    <h1 className="text-center text-danger mt-5 mb-0">{this.state.product.price} €</h1>
                                                </Fragment>
                                            )
                                        }
                                    })()}
                                    <div className="text-center text-secondary mb-3">Encore {this.state.product.quantity} en stock</div>
                                    {(() => {
                                        if (this.state.product.available) {
                                            return (
                                                <button className="col-6 mt-3 mb-4 btn btn-success btn-lg">Commander</button>
                                            )
                                        } else {
                                            return (
                                                <button className="col-8 mt-3 mb-4 btn btn-warning btn-lg" disabled>Non disponible</button>
                                            )
                                        }
                                    })()}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 pe-0 productDetail_Avis bg-light">
                                <div className="fs-5 p-2">
                                    Avis
                                </div>
                            </div>
                            <div className="col-10 productDetail_Avis--bottomBorder ps-0 ms-0">
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-12 p-3 productDetail_Avis--container bg-light">
                                {Avis}
                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>
        )
    }
}