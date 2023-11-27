import React, { useState, Components } from "react";
import './modal.css';
import ModalCard from "../modal card/modal-card";
import InputGroup from "../input group/input-group";
import ButtonGroup from "../button group/button-grp";

const Modal = ({ modalActive, setModalActive, setCardActive, cardActive, setListCardDate, listDateCard }) => {

    return (
        <div className={modalActive.active ? "modal active" : "modal"} onClick={(e) => {
            if (e.target.className === "modal active") {
                setModalActive({active: false,
                    addPayment:false,
                    cardDate: {
                        id: null,
                        name: "",
                        number: "",
                        date: "",
                        namePerson:"",
                        crv:"",
                    }})
            }
        }}>
            <div className="modal__content">
                <ModalCard modalActive={modalActive} />
                <InputGroup modalActive={modalActive} setModalActive={setModalActive} />
                <ButtonGroup
                    listDateCard={listDateCard}
                    setListCardDate={setListCardDate}
                    modalActive={modalActive}
                    setModalActive={setModalActive}
                />
            </div>
        </div>
    )
}

export default Modal;

