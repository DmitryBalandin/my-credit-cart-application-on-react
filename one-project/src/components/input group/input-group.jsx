import React from "react";
import InputField from "../input field/input-field";
import './input-group.css';

const InputGroup = () => {
    return (
        <div className="modal__input-group">
            <InputField label="Name"/>
            <InputField label="Expiration" createType="date" maxLength="5"/>
            <InputField label="Card Number" createType="number" maxLength="16"/>
           <InputField label="CW" type="password"  maxLength="3"/>
        </div>
    )
};

export default InputGroup;