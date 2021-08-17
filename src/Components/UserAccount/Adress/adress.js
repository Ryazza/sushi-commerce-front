import React, {Component, Fragment} from 'react';
import './adress.css';
import {environement} from "../../../Environment/environment";
import axios from "axios";

class Adress extends Component {

    constructor(props) {
        super(props);
        this.state = {
            no: "",
            adress: "",
            complement: "",
            cp: "",
            city: "",
            country: "",
            phone: "",
            user: this.props.data,
            carnet: [],
            api: environement.backBase
        }
        // console.log(this.state.user)
        this.setState({carnet: this.state.user.adress})
        this.handleChangeAdress = this.handleChangeAdress.bind(this);
        this.handleChangeComplements = this.handleChangeComplements.bind(this);
        this.handleChangeCodePostal = this.handleChangeCodePostal.bind(this);
        this.handleChangeVille = this.handleChangeVille.bind(this);
        this.handleChangePays = this.handleChangePays.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleSubmitAdress = this.handleSubmitAdress.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.validateCodePostale = this.validateCodePostale.bind(this);
        this.validatePhone = this.validatePhone.bind(this);
        this.handleChangeNo = this.handleChangeNo.bind(this);
    }

    handleChangeAdress(event) {
        this.setState({adress: event.target.value})
    }

    handleChangeComplements(event) {
        this.setState({complement: event.target.value})
    }

    handleChangeCodePostal(event) {
        this.setState({cp: event.target.value})
    }

    handleChangeVille(event) {
        this.setState({city: event.target.value})
    }

    handleChangePays(event) {
        this.setState({country: event.target.value})
    }

    handleChangePhone(event) {
        this.setState({phone: event.target.value})
    }

    handleChangeNo(event) {
        this.setState({no: event.target.value})
    }

    validateCodePostale(cp) {
        const re = /^(([0-8][0-9])|(9[0-5])|(2[ab]))[0-9]{3}$/;
        return re.test(String(cp).toLowerCase());
    }

    validatePhone(phone) {
        const re = /^((\+)33|0)[1-9](\d{2}){4}$/;
        return re.test(String(phone).toLowerCase());
    }

    validateForm() {
        let validate = {adress: false, cp: false, city: false, country: false, phone: false, no: false};
        let adress = document.getElementById('adress_adress');
        let no = document.getElementById('adress_no');
        let cp = document.getElementById('adress_codePostale');
        let city = document.getElementById('adress_ville');
        let country = document.getElementById('adress_pays');
        let phone = document.getElementById('adress_phone');

        if (!/^\d+$/.test(this.state.no) || this.state.no.trim() === "") {
            no.classList.add("is-invalid");
            no.classList.remove("is-valid");
            validate.no = false;
        } else {
            no.classList.remove("is-invalid");
            no.classList.add("is-valid");
            validate.no = true;
        }

        if (this.state.adress.length < 4) {
            adress.classList.add("is-invalid");
            adress.classList.remove("is-valid");
            validate.adress = false;
        } else {
            adress.classList.remove("is-invalid");
            adress.classList.add("is-valid");
            validate.adress = true;
        }

        if (!this.validateCodePostale(this.state.cp)) {
            cp.classList.add("is-invalid");
            cp.classList.remove("is-valid");
            validate.cp = false;
        } else {
            cp.classList.remove("is-invalid");
            cp.classList.add("is-valid");
            validate.cp = true;
        }

        if (this.state.city.length < 2) {
            city.classList.add("is-invalid");
            city.classList.remove("is-valid");
            validate.city = false;
        } else {
            city.classList.remove("is-invalid");
            city.classList.add("is-valid");
            validate.city = true;
        }

        if (this.state.country.length < 2) {
            country.classList.add("is-invalid");
            country.classList.remove("is-valid");
            validate.country = false;
        } else {
            country.classList.remove("is-invalid");
            country.classList.add("is-valid");
            validate.country = true;
        }

        if (!this.validatePhone(this.state.phone)) {
            phone.classList.add("is-invalid");
            phone.classList.remove("is-valid");
            validate.phone = false;
        } else {
            phone.classList.remove("is-invalid");
            phone.classList.add("is-valid");
            validate.phone = true;
        }

        console.log(validate)
        return !(validate.adress === false || validate.cp === false || validate.city === false || validate.country === false || validate.phone === false)
    }

    async handleSubmitAdress(event) {
        event.preventDefault();
        let valid = await this.validateForm();
        if (valid === true) {
            const params = {
                method: "put",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('letShopToken')
                },
                body: {
                    no: this.state.no,
                    address: this.state.address,
                    complement: this.state.complement,
                    cp: this.state.cp,
                    city: this.state.city,
                    country: this.state.country,
                    phone: this.state.phone
                }
            }
            fetch(this.state.api + "/user/adress", params)
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }

    render() {
        return (
            <Fragment>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h1 className="h2 font_montserrat text-center">
                            Adresses
                        </h1>
                        <div className="fs-5 text-center">
                            Renseigner une adresse pour mon compte utilisateur
                        </div>
                        <div>
                            {/*  get all puis lecture du tableau des adress de la perssone  */}
                        </div>
                        <div className="row justify-content-center mt-4 mb-5">
                            <div className="col-2 text-center">
                                <button className="btn btn-default adress_btnSubmit global_bgColor--orange text-white font_montserrat" data-bs-toggle="modal" data-bs-target="#newAdressBtn">
                                    Ajouter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="newAdressBtn" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title font_montserrat h3" id="exampleModalLabel">Ajouter une adresse</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row justify-content-center">
                                    <form className="col-10">
                                        <div className="form-floating mb-4">
                                            <input type="text" className="form-control adress_input ps-0 pe-0 " id="adress_no" placeholder="10" onChange={this.handleChangeNo}/>
                                            <label htmlFor="adress_no" className="adress_label ps-0 pe-0 pt-0">Numéro</label>
                                        </div>
                                        <div className="form-floating mb-4">
                                            <input type="text" className="form-control adress_input ps-0 pe-0 " id="adress_adress" placeholder="place de l'église" onChange={this.handleChangeAdress}/>
                                            <label htmlFor="adress_adress" className="adress_label ps-0 pe-0 pt-0">Adresse</label>
                                        </div>
                                        <div className="form-floating mb-4">
                                            <input type="text" className="form-control adress_input ps-0 pe-0 " id="adress_complement" placeholder="1er étage" onChange={this.handleChangeComplements}/>
                                            <label htmlFor="adress_complement" className="adress_label ps-0 pe-0 pt-0">Complément d'adresse</label>
                                        </div>
                                        <div className="form-floating mb-4">
                                            <input type="text" className="form-control adress_input ps-0 pe-0 " id="adress_codePostale" placeholder="35000" onChange={this.handleChangeCodePostal}/>
                                            <label htmlFor="adress_codePostale" className="adress_label ps-0 pe-0 pt-0">Code postale</label>
                                        </div>
                                        <div className="form-floating mb-4">
                                            <input type="text" className="form-control adress_input ps-0 pe-0 " id="adress_ville" placeholder="Rennes" onChange={this.handleChangeVille}/>
                                            <label htmlFor="adress_ville" className="adress_label ps-0 pe-0 pt-0">Ville</label>
                                        </div>
                                        <div className="form-floating mb-4">
                                            <input type="text" className="form-control adress_input ps-0 pe-0 " id="adress_pays" placeholder="France" onChange={this.handleChangePays}/>
                                            <label htmlFor="adress_pays" className="adress_label ps-0 pe-0 pt-0">Pays</label>
                                        </div>
                                        <div className="form-floating mb-4">
                                            <input type="text" className="form-control adress_input ps-0 pe-0 " id="adress_phone" placeholder="0102030405" onChange={this.handleChangePhone}/>
                                            <label htmlFor="adress_phone" className="adress_label ps-0 pe-0 pt-0">Numéro de téléphone</label>
                                        </div>
                                        <div className="row justify-content-center mt-3">
                                            <div className="col-3">
                                                <button type="button" className="btn btn-default adress_btnSubmit global_bgColor--blueSky global_fontColor--whiteSmoke font_montserrat text-center" onClick={this.handleSubmitAdress}>Ajouter</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Adress
