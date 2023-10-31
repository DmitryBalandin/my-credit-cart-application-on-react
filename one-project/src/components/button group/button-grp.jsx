import React from "react";
import './button-grp.css';
import BtnSubmit from "../btn-submit/btn-submit";

const ButtonGroup = () => {
    return (
    <div className="modal__btn-group">
        <BtnSubmit children="Cancel"/>
        <BtnSubmit children="Submit"/>
    </div>
    )
}

export default ButtonGroup; 