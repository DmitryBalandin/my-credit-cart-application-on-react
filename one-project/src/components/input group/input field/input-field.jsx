import React from "react";
import './input-filed.css';

const InputField = ({ label }) => {
    return (
        <div className="modul__field">
            <label className="modul__field__label" htmlFor={'input' + label}>{label}</label>
                <input className="modul__field__input" type="text" id={'input' + label} />
            
        </div>
    )
}

export default InputField;