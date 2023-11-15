import React from "react";
import InputField from "../input field/input-field";
import './input-group.css';

const InputGroup = ( {modalActive,setModalActive } ) => {
    return (
        <div className="modal__input-group">
            <InputField label="Name" 
            createType="name"
            maxLength="25"
            value={modalActive.cardDate?.namePerson} 
            setModalActive={setModalActive}
            modalActive={modalActive} 
            />
            <InputField label="Expiration" createType="date"
             setModalActive={setModalActive}
            value={modalActive.cardDate?.date}
            modalActive={modalActive}  
            maxLength="5"/>
            <InputField label="Card Number" createType="number" noPointer={true}
            value={modalActive.cardDate?.number}
            setModalActive={setModalActive}
            modalActive={modalActive} 
            />
           <InputField label="CW" type="password" value={'123'}  maxLength="3"
           setModalActive={setModalActive}
           modalActive={modalActive} 
           />
        </div>
    )
};

export default InputGroup;