import React from "react";
import {Component, Fragment} from "react";
import axios from "axios";
import { environement } from "../../../../Environment/environment";
import './viewAllCategory.css';
import { Link } from "react-router-dom";

export default class ViewAllCategory extends Component {
    constructor(props) {
        super(props);
        this.state={
            categories: [{}],
        }
    }

    componentDidMount() {

        axios.get(environement.backBase+"/category/all").then(response => {
            this.setState({categories: response.data.category})
        })
    }

    render() {
        return(
            <Fragment>
                <div className={"container"}>
                    <h2 className={"text-center mt-5"}>Vos catégories
                        <Link className={"link--addCategory"} to={"/admin/addCategory"}><i className="fas fa-plus-circle icon--addCategory"></i>
                        </Link>
                    </h2>

                {this.state.categories.length !== 0 ?

                    <div className={"row"}>
                        <div className={"col-12"}>
                            <table className={"table table-striped"}>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>nom</th>
                                        <th>description</th>
                                        <th>actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.categories.map((category, index) => {
                                    return [
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{category.name}</td>
                                            <td>{category.description}</td>
                                            <td>
                                                <Link className={"link--view"} to={{ pathname:"/admin/category/"+category._id, state: {name: category.name} }}><i className="far fa-eye icon--view"></i></Link>
                                                <Link className={"link--modify"} to={{ pathname:"/admin/modifyCategory/"+category._id, state: {state: category} }}><i className="fas fa-pencil-alt icon--modify"></i></Link>
                                                <Link className={"link--delete"} to={{ pathname:"/admin/deleteCategory/"+category._id, state: {state: category} }}><i className="fas fa-times icon--delete"></i></Link>
                                                <Link className={"link--subCategory"} to={{pathname: "/admin/addSubCategory/"+category._id, state: {name: category.name} }}><i className="fas fa-tags icon--subCategory"></i></Link>
                                            </td>
                                        </tr>
                                        ]
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <div>
                        <p className={"text-center mt-5"}>Vous n'avez pas encore de catégories !</p>
                    </div>
                }
                </div>
            </Fragment>
        )
    }
}
