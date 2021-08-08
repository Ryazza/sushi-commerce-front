import React from "react";
import {Component, Fragment} from "react";
import './getStockOut.css';
import {environement} from "../../../Environment/environment";
import axios from "axios";
import AuthService from "../../../../services/auth.service"


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
}