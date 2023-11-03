import React from "react";
import './modal-card.css';
import imgBank from '../../icons/sim2.png'
import iconBank from '../../icons/icons-card/alfabank-red.png'

const ModalCard = ({ modalActive }) => {

    return (
        <div className="modal-card">
            <div className="modal-card__content">
                <div className="modal-card__chip">
                    <img src={imgBank} alt="chip on card" />
                </div>
                <div className="modal-card__date">
                    <p className="modal-card__name-person">{modalActive.cardDate?.namePerson || "name soname"}</p>
                    <p className="modal-card__date-card">{modalActive.cardDate?.date || "00/00"}</p>
                    <p className="modal-card__card-account">{modalActive.cardDate?.number || "0000 0000 0000 0000"}</p>
                </div>
                <div className="modal-card__img">
                    <img src={modalActive.cardDate?.img || iconBank} alt="img bank" />
                </div>
            </div>
        </div>
    )
}


export default ModalCard;

