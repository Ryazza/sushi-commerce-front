import React from "react";
import {Component, Fragment} from "react";
import axios from "axios";
import { environement } from "../../../../Environment/environment";
import ProductsInSub from "./productsInSub";

export default class ViewOneSubCategory extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state={
            subCategoryId: this.props.subCategoryId,
            subCategory: {},
            products: [],
        }
    }

    componentDidMount() {
        axios.get(environement.backBase+"/subCategory/"+this.state.subCategoryId).then(response => {
            this.setState({subCategory: response.data.subCategory})
        })
    }

    render() {
        return(
            <Fragment>
                <div className={"container"}>
                    <h2 className={"text-center mt-5"}>Voir la sous catégorie {this.state.subCategory.name}
                    </h2>
                    <div className={"row"}>
                        <div className={"col-12"}>
                            <div className={"d-flex justify-content-center mt-3"}>
                                <img src={this.state.subCategory.img} alt={this.state.subCategory.name}></img>
                            </div>
                            <div>
                                <p>Description: {this.state.subCategory.description}</p>
                            </div>
                            <ProductsInSub subCategoryId={this.state.subCategoryId} subName={this.state.subCategory.name}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
