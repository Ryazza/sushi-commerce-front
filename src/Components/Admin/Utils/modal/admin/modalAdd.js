import './bodyModal.css';
import ErrorForm from "../../../../error/ErrorForm";
import React from "react";

export const ModalAdd = ({ handleClose, show, product, origin }) => {
    console.log(origin)
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section className="modal__main">
                <div className={"box__add"}>
                    <div>
                        <h5 className={"add__title text-center"}>Ajouter la quantité à {product.name}</h5>
                    </div>
                    <hr/>
                    <div className="add__body">
                        <p className={"text-center"}>quantité actuelle: <span className={"quantity--actual"}>{product.quantity}</span></p>
                        <form>
                            <div className="form-group">

                                <div className={"box__nbr"}>
                                    <label htmlFor="quantityToDeduce">Quantité à àjouter</label>
                                    <input type="number" className="form-control input__nbr quantityToAdd"/>
                                </div>
                                {/*{this.state.errorMsg && this.state.errorMsg.length > 1 ?*/}
                                {/*    <ErrorForm />:null*/}
                                {/*}*/}
                                <div className={"d-flex justify-content-center"}>
                                    <button type="button"
                                            className="btn global_bgColor--blueSky global_fontColor--whiteSmoke btn--submit"
                                            data-bs-dismiss="modal">Ajouter
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
