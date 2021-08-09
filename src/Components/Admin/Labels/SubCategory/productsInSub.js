import React from "react";
import {Component, Fragment} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import { environement } from "../../../../Environment/environment";
import AuthService from "../../../../services/auth.service"
import "./productsInsub.css";

export default class ProductsInSub extends Component {
    constructor(props) {
        super(props);
        this.state={
            subCategoryId: this.props.subCategoryId,
            subName: this.props.subName,
            products: [],
        }
    }

    componentDidMount() {
        const headers = {
            'Authorization': `Bearer ${AuthService.getCurrentAuth()}`
        }
        axios.get(environement.backBase+"/subCategory/admin/"+this.state.subCategoryId+"/products", { headers: headers}).then(response => {
            this.setState({products: response.data.products})
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevState.subCategoryId !== this.props.subCategoryId) {
            this.setState({subCategoryId: this.props.subCategoryId});
        }

        if(prevState.subName !== this.props.subName) {
            this.setState({subName: this.props.subName});
        }

        if(prevState.subCategoryId !== this.state.subCategoryId) {
            this.setState({subCategoryId: this.props.subCategoryId});
            const headers = {
                'Authorization': `Bearer ${AuthService.getCurrentAuth()}`
            }
            axios.get(environement.backBase+"/subCategory/admin/"+this.state.subCategoryId+"/products", { headers: headers}).then(response => {
                if(response.data.success === false) {
                    this.setState({products: []})
                } else {
                    this.setState({products: response.data.products})
                }
            }).catch(error => {
                console.log(error.response)
            })
        }
    }

    render() {
        return(
            <Fragment>
                <div className={"container"}>
                    <h2 className={"text-center mt-5"}>Voir les produits Associés
                    </h2>
                    <div className={"row"}>
                        <div className={"col-12"}>
                            {this.state.products && this.state.products.length !== 0 ?

                                <div className={"row"}>
                                    <div className={"col-12"}>
                                        <table className={"table table-striped"}>
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Nom</th>
                                                <th>Quantité</th>
                                                <th>Prix</th>
                                                <th className={"text-center"}>Disponible</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            {this.state.products ?

                                                this.state.products.map((product, index) => {

                                                    return [
                                                        <tr key={index}>
                                                            <td>{index}</td>
                                                            <td>{product.name}</td>
                                                            <td>{product.quantity}</td>
                                                            <td>{product.price} €</td>
                                                            { product.available ?
                                                                <td className={"text-center"}>
                                                                    <i className="far fa-check-circle text-success icon--available"/>
                                                                </td>:
                                                                <td className={"text-center"}>
                                                                    <i className="fas fa-times-circle text-danger icon--available"/>
                                                                </td>
                                                            }
                                                            <td>
                                                                <Tooltip title="Voir">
                                                                    <Link className={"link--view"} to={{ pathname: "/admin/product/detail/"+product._id, state: { product: product, idCategory: this.state.categoryId}}}><i className="far fa-eye icon--view"/></Link>
                                                                </Tooltip>
                                                                <Tooltip title="Modifier">
                                                                    <Link className={"link--modify"} to={{pathname:"/admin/product/modify/"+product._id, state: { product: product, idCategory: this.state.categoryId}}}><i className="fas fa-pencil-alt icon--modify"></i></Link>
                                                                </Tooltip>
                                                                <Tooltip title="Supprimer">
                                                                    <Link className={"link--delete"} to={{pathname:"/admin/product/delete/"+product._id , state: { product: product, category: this.state.category}}}><i className="fas fa-times icon--delete"></i></Link>
                                                                </Tooltip>
                                                            </td>
                                                        </tr>
                                                    ]
                                                }):null
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className={"text-center mt-5"}>Vous n'avez pas encore de produits la catégorie {this.state.subName} !</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
