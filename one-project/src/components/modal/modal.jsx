import React, { useState,Components } from "react";
import './modal.css';
import ModalCard from "../modal card/modal-card";
import InputGroup from "../input group/input-group";
import ButtonGroup from "../button group/button-grp";

const Modal = ({ active, setActive }) => {
         
    return (
        
        <div className={active ? "modal active": "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e =>e.stopPropagation()}>
                <ModalCard/>
                <InputGroup/>
                <ButtonGroup/>
            </div>
        </div>
    )
}

export default Modal;