import React from "react";
import {Component, Fragment} from "react";
import '../newProduct.css'
import ErrorFormLittle from "../../../error/ErrorFormLittle";
import axios from "axios";
import {environement} from "../../../../Environment/environment";
import AuthService from "../../../../services/auth.service"
import Tooltip from '@material-ui/core/Tooltip';
import ErrorForm from "../../../error/ErrorForm";
import {Redirect} from "react-router-dom";
import BodyUpdateProduct from "../formBody/bodyUpdateProduct";

export default class UpdateMultipleProducts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            errorMsg: "",
            redirection: false,
            products: this.props.products,
            categoryError: "",
            subCategoryError: "",
            nameError: "",
            brandError: "",
            colorsError: "",
            discountError: "",
            quantityError: "",
            weightError: "",
            priceError: "",
            bigPictureError:"",
            picturesError: "",
            descriptionError: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({errorMsg: ""})
        this.setState({categoryError: ""})
        this.setState({subCategoryError: ""});
        this.setState({nameError: ""})
        this.setState({brandError: ""});
        this.setState({colorsError: ""});
        this.setState({bigPictureError: ""})
        this.setState({picturesError: ""})
        this.setState({quantityError: ""});
        this.setState({discountError: ""});
        this.setState({weightError: ""});
        this.setState({priceError: ""});
        this.setState({descriptionError: ""})

        let canSend = true;

        const headers = {
            'Authorization': `Bearer ${AuthService.getCurrentAuth()}`
        }

        if(canSend) {
            
        }
    }

    render() {
        const {redirection} = this.state;

        if (redirection) {
            return <Redirect to={{pathname:'/admin/subCategory/' + this.state.selectedSubCategory.value}}/>
        }
        return(
            <Fragment>
                <div className={"container"}>
                    {this.state.products && this.state.products.length > 0 ?

                        this.state.products.map((mainProduct, index) => {

                            return mainProduct.product ?
                                <BodyUpdateProduct product={mainProduct.product}/>
                                : <p>Il n'y a pas de produit à modifier</p>
                        }): <p>Il n'y a pas de produit à modifier</p>
                    }
                </div>
            </Fragment>
        )
    }
}
