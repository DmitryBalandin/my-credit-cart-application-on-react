import React, { useState,Components } from "react";
import './modal.css';
import ModalCard from "../modal card/modal-card";
import InputGroup from "../input group/input-group";
import ButtonGroup from "../button group/button-grp";

const Modal = ({ modalActive, setModalActive }) => {
         
    return (
        
        <div className={modalActive.active ? "modal active": "modal"} onClick={() => setModalActive({active:false})}>
            <div className="modal__content" 
            onClick={e =>{
                e.stopPropagation()
                
            }

            }
            >
                <ModalCard modalActive={modalActive} />
                <InputGroup modalActive={modalActive} setModalActive={setModalActive}  />
                <ButtonGroup/>
            </div>
        </div>
    )
}

export default Modal;

