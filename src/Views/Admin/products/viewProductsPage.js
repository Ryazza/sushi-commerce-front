import React from "react";
import {Component, Fragment} from "react";
import NavbarAdmin from "../../../Pioche/component/NavbarAdmin/navbarAdmin";
import NavbarProduct from "../../../Components/Admin/products/NavbarProduct/navbarProduct";
import SeekbarCategories from "../../../Components/Admin/Utils/seekBarCategories/seekbarCategories";
import ProductsInSub from "../../../Components/Admin/Labels/SubCategory/productsInSub";

export default class ViewProductsPage extends Component {

    constructor(props) {
        super(props);
        this.state={
            subCategoryId: '',
            subCategoryName: '',
        }
    }

    handleSearchChange= (subCategory) => {
        this.setState({subCategoryId: subCategory.value});
        this.setState({subCategoryName: subCategory.label});
    }

    render() {
        return(
            <Fragment>
                <NavbarAdmin/>
                <NavbarProduct/>
                <SeekbarCategories onSelectSubCategory={this.handleSearchChange}/>
                { this.state.subCategoryId.length < 10 ?
                    <div>
                        <h5 className={"text-center text-danger mt-4"}>Veuillez sélectionner une catégorie et une sous catégorie</h5>
                    </div>:
                    // <ViewOneSubCategory subCategoryId={this.state.subCategoryId}/>
                    <div className={"mb-5"}>
                        <ProductsInSub subCategoryId={this.state.subCategoryId} subName={this.state.subCategoryName}/>
                    </div>
                }
            </Fragment>
        )
    }
}
