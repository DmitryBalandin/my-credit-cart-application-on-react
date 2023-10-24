import React, { useState,Components } from "react";
import './modal.css';

const Modal = ({ active, setActive }) => {
         
    return (
        
        <div className={active ? "modal active": "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e =>e.stopPropagation()}>
                <div className="modal__card">Img</div>
                <div className="modal__date-input">Date</div>
                <div className="modal__nav">Navigation</div>
            </div>
        </div>
    )
}

export default Modal;