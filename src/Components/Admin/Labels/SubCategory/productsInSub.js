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
            showSelectors: false,
            selectAll: false,
            arrChecked: [],
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

    handleViewSelect = (event) => {
        if(this.state.showSelectors === true) {
            if(this.state.selectAll === false) {
                this.setState({arrChecked: []})
            }
            this.setState({showSelectors: false})
        } else {
            this.setState({showSelectors: true})
        }
    }

    handleSelectAll = (event) => {
        let arrChecked = [];
        if(this.state.selectAll === true) {
            this.setState({arrChecked: arrChecked})
            this.setState({selectAll: false})
        } else {
            for(let i=0; i < this.state.products.length; i++) {
                arrChecked.push({ref: i, id: this.state.products[i]._id, product: this.state.products[i]})
            }
            this.setState({arrChecked: arrChecked})
            this.setState({selectAll: true})
        }
    }

    handleCheckbox = (event) => {
        let arrChecked = this.state.arrChecked;
        if(event.target.checked === true) {
            for(let i=0; i < this.state.products.length; i++) {
                if(event.target.value === this.state.products[i]._id) {
                    arrChecked.push({ref: i, id: this.state.products[i]._id, product: this.state.products[i]})
                }
            }
            this.setState({arrChecked: arrChecked});

        } else {
            if(arrChecked.length > 0) {
                for(let i=0; i < arrChecked.length; i++) {
                    if(arrChecked[i].id === event.target.value) {
                        arrChecked.splice(i,1);
                    }
                }
                this.setState({arrChecked: arrChecked});
            }
        }
    }

    render() {
        return(
            <Fragment>
                <div className={"row"}>
                    <div className={""}>
                        <h2 className={"text-center mt-5"}>Voir les produits Associés
                        </h2>
                        <div className={"d-flex justify-content-end"}>
                            <h5 className={"select--all text--small"}>Sélection Multiple</h5>
                            <div className="form-check form-switch link--select">
                                <input className="form-check-input" type="checkbox"
                                       id="viewMultiSelect" value={this.state.showSelectors} onChange={this.handleViewSelect}/>
                            </div>
                        </div>
                        {this.state.showSelectors === true ?
                            <div className={"d-flex justify-content-end"}>
                                <h5 className={"select--all text-info"}>Tout selectionner</h5>
                                <Tooltip title="Sélectionner">
                                    <div className="form-check form-switch link--select mt-1">
                                        <input className="form-check-input" type="checkbox"
                                               id={"selectAll"} onChange={this.handleSelectAll}/>
                                    </div>
                                </Tooltip>
                            </div>: null
                        }
                    </div>
                </div>

                {this.state.products && this.state.products.length !== 0 ?

                    <div className={"row"}>
                        <div className={"col-12"}>
                            <table className={"table table-striped box__product--color mt-4"}>
                                <thead>
                                <tr>
                                    <th className={"col-1"}>#</th>
                                    <th className={"col-2"}>Nom</th>
                                    <th className={"col-2"}>Quantité</th>
                                    <th className={"col-2"}>Prix</th>
                                    <th className={"col-1 text-center"}>Disponible</th>
                                    <th className={"col-3 text-center"}>Actions</th>
                                    {this.state.showSelectors ?
                                        <th className={"col-1 text-center"}>Sélection</th>
                                        :null
                                    }

                                </tr>
                                </thead>

                                <tbody>
                                {this.state.products ?

                                    this.state.products.map((product, index) => {

                                        return [
                                            <tr key={index}>
                                                <td>{index}</td>
                                                <td>{product.name}</td>
                                                <td style={{padding: "0.5em 0 0 2.4em"}}>{product.quantity}</td>
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
                                                    <div className={"row"}>
                                                        <div className={"col-12"}>
                                                            <div className={"d-flex justify-content-center"}>
                                                                <Tooltip title="Voir">
                                                                    <Link className={"link--view"} to={{ pathname: "/admin/product/detail/"+product._id, state: { product: product, idCategory: this.state.categoryId}}}><i className="far fa-eye icon--view"/></Link>
                                                                </Tooltip>
                                                                <Tooltip title="Modifier">
                                                                    <Link className={"link--modify"} to={{pathname:"/admin/product/modify/"+product._id, state: { product: product, idCategory: this.state.categoryId}}}><i className="fas fa-pencil-alt icon--modify"></i></Link>
                                                                </Tooltip>
                                                                <Tooltip title="Supprimer">
                                                                    <Link className={"link--delete"} to={{pathname:"/admin/product/delete/"+product._id , state: { product: product, category: this.state.category}}}><i className="fas fa-times icon--delete"></i></Link>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </td>
                                                {this.state.showSelectors ?
                                                    <td>
                                                        <div className={"col-12"}>
                                                            <div className={"d-flex justify-content-center"}>

                                                                <Tooltip title="Sélectionner">
                                                                    <div
                                                                        className="form-check form-switch link--select">
                                                                        {this.state.selectAll ?
                                                                            <input className="form-check-input"
                                                                                   type="checkbox"
                                                                                   value={product._id} id={index}
                                                                                   onChange={this.handleCheckbox}
                                                                                   checked/> :
                                                                            <input className="form-check-input"
                                                                                   type="checkbox"
                                                                                   value={product._id} id={index}
                                                                                   onChange={this.handleCheckbox}
                                                                            />
                                                                        }
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                    </td>:null
                                                }
                                            </tr>
                                        ]
                                    }):null
                                }
                                </tbody>
                            </table>
                            {this.state.arrChecked && this.state.arrChecked.length > 0 ?
                                <div className={"d-flex justify-content-end"}>
                                    <div className={"box__multiple"}>
                                        <div><p className={"text-bold"}>Gestion multiple</p></div>
                                        <div className={"d-flex justify-content-center"}>
                                            <Tooltip title="Voir plusieurs">
                                                <Link to={{pathname: "/admin/product/multiple/detail", state: {arrProducts: this.state.arrChecked}}}><i className="fas fa-eye icon__view--multiple"></i></Link>
                                            </Tooltip>
                                            <Tooltip title="Modifier plusieurs">
                                                <Link to={{pathname: "/admin/product/multiple/modify", state: {arrProducts: this.state.arrChecked}}}><i className="fas fa-edit icon__modify--multiple"/></Link>
                                            </Tooltip>
                                            <Tooltip title="Supprimer plusieurs">
                                                <Link to={{pathname: "/admin/product/multiple/delete", state: {arrProducts: this.state.arrChecked}}}><i className="fas fa-trash-alt icon__delete--multiple"/></Link>
                                            </Tooltip>
                                        </div>
                                    </div>

                                </div>: null
                            }
                        </div>
                    </div>
                    :
                    <div>
                        <p className={"text-center mt-5"}>Vous n'avez pas encore de produits la catégorie {this.state.subName} !</p>
                    </div>
                }
            </Fragment>
        )
    }
}
