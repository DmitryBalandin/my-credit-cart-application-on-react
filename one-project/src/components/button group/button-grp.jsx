import React from "react";
import classNames from 'classnames/bind';
import './button-grp.css';
import BtnSubmit from "../btn-submit/btn-submit";

const ButtonGroup = ({ listDateCard, setListCardDate, modalActive,setModalActive}) => {
    if(modalActive.addPayment){
        return (
            <div className="modal__btn-group">
            <BtnSubmit children="Close" classes="white"
                listDateCard={listDateCard}
                setListCardDate={setListCardDate}
                modalActive={modalActive}
                setModalActive={setModalActive}
                action="close"
            />
            <BtnSubmit
                children="Add Card"
                listDateCard={listDateCard}
                setListCardDate={setListCardDate}
                modalActive={modalActive}
                setModalActive={setModalActive}
                action="add-card"
            />
        </div>
        )
    }
    return (
        <div className="modal__btn-group">
            <BtnSubmit children="Cancel" classes="white"
                listDateCard={listDateCard}
                setListCardDate={setListCardDate}
                modalActive={modalActive}
                setModalActive={setModalActive}
                action="cancel"
            />
            <BtnSubmit
                children="Change"
                listDateCard={listDateCard}
                setListCardDate={setListCardDate}
                modalActive={modalActive}
                setModalActive={setModalActive}
                action="redact"
            />
        </div>
    )
}

export default ButtonGroup; 