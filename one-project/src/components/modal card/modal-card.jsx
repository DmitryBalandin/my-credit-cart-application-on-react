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
                    <div className="modal-card__name-person"></div>
                    <div className="modal-card__date-card"></div>
                    <div className="modal-card__card-account"></div>
                </div>
                <div className="modal-card__img">
                    <img src={iconBank} alt="img bank"/>
                </div>
            </div>
        </div>
    )
}


export default ModalCard;