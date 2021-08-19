import React from "react";
import {Component} from "react";
import AuthService from "../../../services/auth.service";
import axios from "axios";
import {environement} from "../../../Environment/environment";

export default class ManageOneOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderId : this.props.orderId,
            order : [{}]
        }
        console.log(props)
    }

    componentDidMount() {
        const headers = {
            'Authorization': `Bearer ${AuthService.getCurrentAuth()}`
        }
        axios.get(environement.backBase+"/admin/order/"+ this.state.userId, {headers:headers}).then(response => {
            this.setState({user: response.data.users})
        })
    }

    cleanDate(data) {
        if (data)
            return data.substr(0,10);
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}