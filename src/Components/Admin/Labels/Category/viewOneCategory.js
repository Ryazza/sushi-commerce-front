import React from "react";
import {Component, Fragment} from "react";
import axios from "axios";
import { environement } from "../../../../Environment/environment";
import './viewAllCategory.css';
import { Link } from "react-router-dom";

export default class ViewOneCategory extends Component {
    constructor(props) {
        super(props);
        this.state={
            categoryId: this.props.categoryId,
            nameCategory: this.props.name,
            category: {},
        }
    }

    componentDidMount() {

        axios.get(environement.backBase+"/category/"+this.state.categoryId).then(response => {
            this.setState({category: response.data.category})
        })
    }

    render() {
        return(
            <Fragment>
                <div className={"container"}>
                    <h2 className={"text-center mt-5"}>Voir les sous categories de {this.state.nameCategory}
                        <Link className={"link--addCategory"} to={"/admin/addCategory"}><i className="fas fa-plus-circle icon--addCategory"></i>
                        </Link>
                    </h2>

                    {this.state.category.length !== 0 ?

                        <div className={"row"}>
                            <div className={"col-12"}>
                                <div>Image: {this.state.category.img}</div>
                                <p>{this.state.category.description}</p>

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
                                    {this.state.category.subCategory ?

                                        this.state.category.subCategory.map((subCategory, index) => {

                                            return [
                                                <tr key={index}>
                                                    <td>{index}</td>
                                                    <td>{subCategory.name}</td>
                                                    <td>{subCategory.description}</td>
                                                    <td>
                                                        <Link className={"link--view"} to={"/admin/SubCategory/"+subCategory._id}><i className="far fa-eye icon--view"></i></Link>
                                                        <Link className={"link--modify"} to={{pathname:"/admin/subCategory/modify/"+subCategory._id, state: { subCategory: subCategory, idCategory: this.state.categoryId, name:this.state.nameCategory}}}><i className="fas fa-pencil-alt icon--modify"></i></Link>
                                                        <Link className={"link--delete"} to={{pathname:"/admin/subCategory/delete/"+subCategory._id , state: { subCategory: subCategory}}}><i className="fas fa-times icon--delete"></i></Link>
                                                        <Link className={"link--subCategory"} to={{pathname: "/admin/addSubCategory/"+subCategory._id, state: {name: subCategory.name}}}><i className="fas fa-tags icon--subCategory"></i></Link>
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
                            <p className={"text-center mt-5"}>Vous n'avez pas encore de catégories !</p>
                        </div>
                    }
                </div>
            </Fragment>
        )
    }
}
