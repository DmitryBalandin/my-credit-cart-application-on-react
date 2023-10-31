import React from "react";
import './modal-card.css';
import imgBank from '../../icons/sim2.png'
import iconBank from '../../icons/icons-card/alfabank-red.png'

const ModalCard = () =>{
    return (
        <div className="modal-card">
            <div className="modal-card__content">
                <div className="modal-card__chip">
                    <img src={imgBank}  alt="chip on card"/>
                </div>
                <div className="modal-card__date">
                    <p className="modal-card__name-person">Pascal Benait</p>
                    <p className="modal-card__date-card">09/25</p>
                    <p className="modal-card__card-account">0000  0000  0000  1600</p>
                </div>
                <div className="modal-card__img">
                    <img src={iconBank} alt="img bank"/>
                </div>
            </div>
        </div>
    )
}


export default ModalCard;