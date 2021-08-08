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
            console.log(response)
        })

    }
    //
    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("ok")
    //     let canSend = false;
    //     let quantity = document.getElementById('productsOut__quantity').value;
    //     let productId = document.getElementById("productsOut__productId").value;
    //     console.log(quantity, productId)
    //     const headers = {
    //         'Authorization': `Bearer ${AuthService.getCurrentAuth()}`
    //     }
    //     if(quantity > 0) {
    //         canSend = true;
    //         console.log(canSend)
    //     }
    //
    //     if(canSend) {
    //
    //         axios.post(environement.backBase+"/product/updateStock/" , {
    //
    //         }, { headers: headers}).then( async res => {
    //             this.setState({ success: res.data.message });
    //             this.setState({ redirection: true });
    //         }).catch( error => {
    //             console.log( error.response );
    //             if( error.response ) {
    //                 this.setState({ errorMsg: error.response.data.message });
    //             }
    //         })
    //     }
    //
    // }

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
                                        {/*<td className={"hidden"}>id</td>*/}
                                        <th>nom</th>
                                        <th>statut</th>
                                        {/*<th>quantité</th>*/}
                                        {/*<th>actions</th>*/}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.products.map((products, index) => {
                                        if(products.quantity === 0) {
                                            return [
                                                <tr key={index}>
                                                    <td>{index}</td>
                                                    {/*<td className={"hidden"} id={'productsOut__productId'}> {products._id}</td>*/}
                                                    <td>{products.name}</td>
                                                    <td><i className={"productsOut__rupture"}>Rupture Stock</i></td>
                                                    {/*<td><input type={'number'} placeholder={'indiquer une quantité'} id={"productsOut__quantity"} min={1}/></td>*/}
                                                   {/*<td><input type={"button"} value={'commander'} className={"productsOut__order"+products._id} onClick={this.handleSubmit}/></td>*/}
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