import React from "react";
import {Component, Fragment} from "react";
import MostSold from "../../Product/mostSold";

export default class Promotion extends Component {
    render() {
        return(
            <Fragment>
                <MostSold data={{name: "Lets Shop", id: "all"}}/>

            </Fragment>
        )
    }
}
