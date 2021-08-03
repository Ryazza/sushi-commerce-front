import React from "react";
import {Component, Fragment} from "react";
import './displayProducts.css';
import {Link} from "react-router-dom";

export default class DisplayProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: null,

            research: this.props.research
        }

        console.log("from props: ", this.props.research)
    }

    componentDidMount() {
        //requete axios pour récupérer les données
        const url = "http://localhost:4244/product/search/" + this.state.research;

        const requestOptions = {
            method: 'GET',
            headers: {"Content-Type": 'application/json'},

        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({products: data.products})
            });
    }

    render() {
        console.log(this.state.products)
        let toto = [];


        if (this.state.products) {
            console.log("dans le if", this.state.products);
                        toto = this.state.products.map((product, index) => {
                return (<div>
                        <p>nom : {product.name}</p>
                        <p>catégorie: {product.category}</p>
                        <p>prix : {product.price}</p>
                        <p>toto{product.pictures.forEach(picture =>{
                        return (<img src={picture} alt=""/>)
                        })} </p>
                        <hr/>
                    </div>
                )

            })
        }
        return (
            <Fragment>
                <form className="DisplayProducts_container container d-flex flex-wrap">
                    <div className="DisplayProducts_container_box">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                        </div>
                        <div className="DisplayProducts_info">
                            <div>
                                <p>Nom article</p>
                                <p>Description</p>
                            </div>
                            <div>
                                <p>Catégorie</p>
                                <p>Stock</p>
                            </div>
                            <div>{toto}</div>
                        </div>
                        <div>

                        </div>
                    </div>
                </form>
            </Fragment>
        )
    }
}