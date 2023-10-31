import React from "react";
import classNames from 'classnames/bind';
import './button-grp.css';
import BtnSubmit from "../btn-submit/btn-submit";

const ButtonGroup = () => {
    return (
    <div className="modal__btn-group">
        <BtnSubmit children="Cancel" classes="white"/>
        <BtnSubmit children="Submit"/>
    </div>
    )
}

export default ButtonGroup; 