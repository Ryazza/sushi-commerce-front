import React from "react";
import {Component, Fragment} from "react";
import NavbarAdmin from "../../../Pioche/component/NavbarAdmin/navbarAdmin";
import NavbarProduct from "../../../Components/Admin/products/NavbarProduct/navbarProduct";
import DetailProduct from "../../../Components/Admin/products/detailProduct";

export default class DetailProductPage extends Component {

    constructor(props) {
        super(props);
        this.state={
            product: this.props.location.state.product
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
                <DetailProduct product={this.state.product}/>
            </Fragment>
        )
    }
}
