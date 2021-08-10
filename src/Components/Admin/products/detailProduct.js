import React from "react";
import {Component, Fragment} from "react";
import {Redirect} from "react-router-dom";
import "./detailProduct.css"

export default class DetailProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: this.props.product,
            redirection: false
        }
        this.handleBack = this.handleBack.bind(this);
    }

    handleBack(e) {
        e.preventDefault();
        this.setState({redirection: true});
    }

    render() {
        const {redirection} = this.state;

        if (redirection) {
            return <Redirect to={{pathname: "/admin/viewProducts"}}/>
        }
        return(
            <Fragment>
                <div className={"container"}>
                    <div className="box__detail mt-5" role="alert">
                        <h2 className={"text-center"}>Voir le produit {this.state.product.name}</h2>
                        <div className={"row"}>
                            <div className={"col-10 offset-1 mt-4"}>
                                <div className={"row"}>
                                    <div className={"col-6"}>
                                        <p className={"detail__category text-center"}>Catégorie: <span className={"category--bold"}>{this.state.product.subCategoryId.category.name}</span></p>
                                    </div>
                                    <div className={"col-6"}>
                                        <p className={"detail__category text-center"}>Sous catégorie: <span className={"category--bold"}>{this.state.product.subCategoryId.name}</span></p>
                                    </div>
                                </div>
                                <div className={"row mt-4"}>
                                    <div className={"d-flex justify-content-around"}>
                                        <p>Quantité: <span className={"text-bold"}>{this.state.product.quantity}</span></p>
                                        <p>Prix: <span className={"text-bold"}>{this.state.product.price} €</span></p>
                                        <p>Nombre de vente: <span className={"text-bold"}>{this.state.product.sale}</span></p>
                                        <p>Nombre de vue: <span className={"text-bold"}>{this.state.product.views}</span></p>
                                    </div>
                                    <div className={"text-center"}>
                                        <p>Disponible{this.state.product.available}</p>
                                    </div>
                                </div>
                                {this.state.product.available ?
                                    <div className={"text-center"}>
                                        <i className="far fa-check-circle text-success icon--available"/>
                                    </div> :
                                    <div className={"text-center"}>
                                        <i className="fas fa-times-circle text-danger icon--available"/>
                                    </div>
                                }
                                <div className={"ml-5"}>
                                    <div className={"d-flex justify-content-center mt-4"}>
                                        <img src={this.state.product.bigPicture} style={{height: "20em", margin: "1em 0.5em"}} alt={"Produit"}/>
                                    </div>
                                    <p className={"text-center"}>Description: {this.state.product.description}</p>
                                </div>
                                <div className={"row mt-4"}>
                                    <p>Marque: {this.state.product.brand}</p>
                                    <p>Poids: {this.state.product.weight}</p>
                                    <p>Couleur: {this.state.product.color}</p>
                                </div>
                                <h5 className={"text-center"}>Images</h5>
                                <div className={"d-md-flex justify-content-center"}>
                                    {this.state.product.pictures && this.state.product.pictures.length > 1?


                                        this.state.product.pictures.map((image, index) => {
                                            return <div key={index}>
                                                <img className={"ml-2"} style={{height: "10em", margin: "1em 0.5em"}} src={image.url} alt={index}/>
                                            </div>
                                        })
                                        :<p className={"text-center"}>Il n'y a pas d'image trouvé</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}