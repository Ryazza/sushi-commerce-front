import React from "react";
import {Component, Fragment} from "react";
import './getStockOut.css';
import {environement} from "../../../Environment/environment";
import axios from "axios";
import AuthService from "../../../services/auth.service"


export default class GetStockOut extends Component {
    constructor(props) {
        super(props);
        this.state={
            products: [{}],
        }
    }

    componentDidMount() {
        const headers = {
            'Authorization': `Bearer ${AuthService.getCurrentAuth()}`
        }
        axios.get(environement.backBase+"/product/verifyStock", {headers:headers}).then(response => {
            this.setState({products: response.data.products})
        })
    }

    render() {
        return (
            <Fragment>
                {this.state.products && this.state.products.length !== 0 ?
                    <form action="">
                        <div className={"row"} id={"productsOut"}>
                            <div className={"col-12"}>
                                <table className={"table table-striped"}>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <td className={"hidden"}>id</td>
                                        <th>nom</th>
                                        <th>statut</th>
                                        <th>quantité</th>
                                        <th>actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.products.map((products, index) => {
                                        if(products.quantity === 0) {
                                            return [
                                                <tr key={index}>
                                                    <td>{index}</td>
                                                    <td className={"hidden"}> {products._id}</td>
                                                    <td>{products.name}</td>
                                                    <td><i className={"productsOut__rupture"}>Rupture Stock</i></td>
                                                    <td><input type={'text'} placeholder={'indiquer une quantité'}/></td>
                                                    <td><input type={"button"} value={'commander'}/></td>
                                                </tr>
                                            ]
                                        }
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </form>

                    :
                    <div>
                        <p className={"text-center mt-5"}>Erreur!</p>
                    </div>
                }
            </Fragment>
        );
    }

}