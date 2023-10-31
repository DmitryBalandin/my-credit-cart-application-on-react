import React from "react";
import './input-filed.css';

const InputField = ({ label, type,createType, ...attrs }) => {

    
    const handleChangeExp = (e) => {
        console.log(e.target.value.length)
        
        if (!isFinite(e.target.value[e.target.value.length - 1])) {
            e.target.value = e.target.value.slice(0, -1);
        }
        console.log(isFinite(e.target.value))
        if (e.target.value.length == 2 && +e.target.value < 13) {
            e.target.value = e.target.value + "/";
        } else if (e.target.value.length == 2 && +e.target.value >= 13) {
            e.target.value = e.target.value.slice(0, -1)
        }

    }

    const handleChangeNumber =(e) =>{
        if (!isFinite(e.target.value[e.target.value.length - 1])) {
            e.target.value = e.target.value.slice(0, -1);
        }
    }

    return (
        <div className="modul__field">
            <label className="modul__field__label" htmlFor={'input' + label}>{label}</label>
            <input className="modul__field__input" type={type || "text"} id={'input' + label} {...attrs} onChange={createType == "date" ? handleChangeExp:createType == "number" ? handleChangeNumber: null } />
        </div>
    )
}

export default InputField;