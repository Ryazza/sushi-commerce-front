import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

import './register.css';

class Register extends Component {

    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navBar_mainContainer">
                    <div className="container-fluid">
                        <a href="#" className="navbar-brand p-0"><img src={process.env.PUBLIC_URL + '/assets/logo.png'} className="navBar_logo" alt=""/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"                         aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"> </span>
                        </button>
                    </div>
                </nav>

            </Fragment>
        )
    }
}

export default Register