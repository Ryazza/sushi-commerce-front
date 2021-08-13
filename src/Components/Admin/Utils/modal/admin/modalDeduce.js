
import './bodyModal.css';
import axios from "axios";
import ErrorForm from "../../../../error/ErrorForm";
import ErrorFormLittle from "../../../../error/ErrorFormLittle";
import React, { useEffect, useRef, useState } from 'react';
import AuthService from "../../../../../services/auth.service";
import {environement} from "../../../../../Environment/environment";
import {Redirect} from "react-router-dom";

export const ModalDeduce = ({ handleClose, show, product }) => {
    const [redirection, setRedirection] = useState(false);
    const [nbrError, setNbrError] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [nbrToDeduce, setNbrToDeduce] = useState('');
    const [productId, setProductId] = useState(null);

    useEffect(() => {
        setProductId(product._id)
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setProductId(product._id)
        setNbrError("");
        setErrorMsg("");
        let canSend = true;
        if(isNaN(parseInt(nbrToDeduce))) {
            setNbrError("Vous devez rentrer un chiffre" );
            canSend = false;
        } else if (parseInt(nbrToDeduce) <= 0) {
            setNbrError("Votre nombre doit être supérieur à 0");
            canSend = false;
        } else if((product.quantity - parseInt(nbrToDeduce)) < 0) {
            canSend = false;
            setNbrError("la quantité du produit ne peu pas être inférieur à 0");
        }
        const headers = {
            'Authorization': `Bearer ${AuthService.getCurrentAuth()}`
        }

        if(canSend) {
            axios.put(environement.backBase+"/product/deduceStock/"+productId, {
                quantity: parseInt(nbrToDeduce)
            }, { headers: headers}).then( res => {
                setRedirection(true)
            }).catch( error => {
                console.log(error.response)
                if( error.response ) {
                    setErrorMsg(error.response.statusText);
                }
            })
        }
    }

    if (redirection) {
        window.location.reload();
    }

    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
                <section className="modal__main">
                    <div className={"box__deduce"}>
                        <div>
                            <h5 className={"deduce__title text-center"}>Déduire la quantité à {product.name}</h5>
                        </div>
                        <hr/>
                        <div className="deduce__body">
                            <p className={"text-center"}>quantité actuelle: <span
                                className={"quantity--actual"}>{product.quantity}</span></p>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">

                                    <div className={"box__nbr"}>
                                        <label htmlFor="quantityToDeduce">Quantité à déduire</label>
                                        <input type="number" className="form-control input__nbr quantityToDeduce"
                                               onChange={event => setNbrToDeduce(event.target.value)}
                                               value={nbrToDeduce}
                                        />
                                        {nbrError && nbrError.length > 1 ?
                                            <ErrorFormLittle error={nbrError}/>:null
                                        }
                                    </div>
                                    {errorMsg && errorMsg.length > 1 ?
                                        <ErrorForm error={errorMsg}/>:null
                                    }
                                    <div className={"d-flex justify-content-center"}>
                                        <button type="button"
                                                className="btn global_bgColor--blueSky global_fontColor--whiteSmoke btn--submit"
                                                type={"submit"}
                                        >Déduire
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="deduce__footer">
                        <div className={"d-flex justify-content-end"}>
                            <button type="button" className="btn btn-warning" onClick={handleClose}>
                                Annuler
                            </button>
                        </div>
                    </div>
                </section>
        </div>
    );
};
