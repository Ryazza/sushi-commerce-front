import React, {Component, Fragment} from 'react';
import './cart.css';
import axios from "axios";

const environnement = require('../../../Environment/environment')
const Env = environnement.environement

class Cart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }

    }

    componentDidMount() {
        axios.get(Env.backBase + '/category/all')
            .then(res => {
                this.setState({category: res.data.category})
            })
            .catch(error =>
                console.log(error)
            );
    }


    render() {
        return (
            <Fragment>
                <div className="Popup">hello Cart World !</div>

            </Fragment>
        )
    }
}

export default Cart