import React from "react";
import InputField from "./input field/input-field";
import './input-group.css';

const InputGroup = () => {
    return (
        <div className="modal__input-group">
            <InputField label="Name"/>
            <InputField label="Expiration"/>
            <InputField label="Card Number"/>
            <InputField label="CW"/>
        </div>
    )
};

export default InputGroup;