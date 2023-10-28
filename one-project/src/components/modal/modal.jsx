import React, { useState,Components } from "react";
import './modal.css';
import ModalCard from "../modal card/modal-card";
import InputGroup from "../input group/input-group";

const Modal = ({ active, setActive }) => {
         
    return (
        
        <div className={active ? "modal active": "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e =>e.stopPropagation()}>
                <ModalCard/>
                <InputGroup/>
                <div className="modal__nav">Navigation</div>
            </div>
        </div>
    )
}

export default Modal;