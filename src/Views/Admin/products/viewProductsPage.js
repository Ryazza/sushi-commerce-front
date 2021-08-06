import React from "react";
import {Component, Fragment} from "react";
import NavbarAdmin from "../../../Pioche/component/NavbarAdmin/navbarAdmin";
import NavbarProduct from "../../../Components/Admin/products/NavbarProduct/navbarProduct";
import ViewOneSubCategory from "../../../Components/Admin/Labels/SubCategory/viewOneSubCategory";

export default class ViewProductsPage extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.subCategoryId)
        this.state={
            subCategoryId: this.props.subCategoryId,
            subCategory: {},
            products: [],
        }
    }

    render() {
        return(
            <Fragment>

                <NavbarAdmin/>
                <NavbarProduct/>
                { typeof this.state.subCategoryId === "undefined" ?
                    <div><h5 className={"text-center text-danger mt-4"}>Veuillez sélectionner une catégorie et une sous catégorie</h5></div>:
                    <ViewOneSubCategory/>
                }

            </Fragment>
        )
    }
}
