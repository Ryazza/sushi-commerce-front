
import './bodyModal.css';
import ErrorForm from "../../../../error/ErrorForm";
import React from "react";

export const ModalDeduce = ({ handleClose, show, product }) => {
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
                        <p className={"text-center"}>quantité actuelle: <span className={"quantity--actual"}>{product.quantity}</span></p>
                        <form>
                            <div className="form-group">

                                <div className={"box__nbr"}>
                                    <label htmlFor="quantityToDeduce">Quantité à déduire</label>
                                    <input type="number" className="form-control input__nbr quantityToDeduce"/>
                                </div>
                                {/*{this.state.errorMsg && this.state.errorMsg.length > 1 ?*/}
                                {/*    <ErrorForm />:null*/}
                                {/*}*/}
                                <div className={"d-flex justify-content-center"}>
                                    <button type="button"
                                            className="btn global_bgColor--blueSky global_fontColor--whiteSmoke btn--submit"
                                            data-bs-dismiss="modal">Déduire
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
