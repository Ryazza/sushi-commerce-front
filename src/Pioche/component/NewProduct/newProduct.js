import React from "react";
import {Component, Fragment} from "react";
import './newProduct.css';
import Autocomplete from "../Autocomplete/autocomplete";



export default class NewProduct extends Component{
    constructor(props) {
        super(props);
        this.state = {title:"", description:"", price:"", weight:"", label:""}
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeWeight = this.handleChangeWeight.bind(this);
        this.handleChangeLabel = this.handleChangeLabel.bind(this);
    }

    handleChangeTitle(event) {
        this.setState({title:event.target.value});
    }

    handleChangeDescription(event) {
        this.setState({description:event.target.value});
    }

    handleChangePrice(event) {
        this.setState({price:event.target.value});
    }

    handleChangeWeight(event) {
        this.setState({weight:event.target.value});
    }

    handleChangeLabel(event) {
        this.setState({label:event.target.value})
    }

    handleSubmitRegister(event) {
        event.preventDefault();
            // let form = {
            //     title: this.state.title,
            //     description: this.state.description,
            //     price: this.state.price,
            //     weight: this.state.weight,
            //     label: this.state.label,
            // };
            //todo requete
        }


    render() {
        return(
            <Fragment>
                <form className="NewProduct_container global_bgColor--whiteSmoke container font_montserrat d-flex flex-column align-items-center">
                    <div className="form-floating mb-3 col-4">
                        <input type="text" className="form-control " id="NewProduct_title" onChange={this.handleChangeTitle} placeholder="name@example.com"/>
                            <label htmlFor="NewProduct_title">Titre</label>
                    </div>
                    <div className="form-floating col-6">
                        <textarea type="text" className="form-control" id="NewProduct_description" onChange={this.handleChangeDescription} placeholder="Password"/>
                            <label htmlFor="NewProduct_description">Description</label>
                    </div>
                    <div className="col-6 d-flex justify-content-around">
                        <div className="form-floating mb-3 col-4">
                            <input type="text" className="form-control " id="NewProduct_price" onChange={this.handleChangePrice} placeholder="name@example.com"/>
                            <label htmlFor="NewProduct_price">Prix</label>
                        </div>
                        <div className="form-floating mb-3 col-4">
                            <input type="text" className="form-control " id="NewProduct_weight" onChange={this.handleChangeWeight} placeholder="name@example.com"/>
                            <label htmlFor="NewProduct_weight">Poids</label>
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-around">
                        <label>Catégorie</label>
                        <Autocomplete suggestions={["Oranges", "Apples", "Banana", "Kiwi", "Mango"]}/>
                    </div>
                    <input className="global_bgColor--charcoal global_fontColor--whiteSmoke NewProduct_create_btn" type="button" onClick={this.handleSubmitRegister} value="Créer l'article"/>
                </form>
            </Fragment>
        )
    }
}