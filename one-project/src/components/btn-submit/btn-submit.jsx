import React, { useState } from "react";
import './btn-submit.css'

const BtnSubmit = ({setModalAcive}) =>{
    
    return (
        <button type="button" className="btn" onClick={() =>setModalAcive(true)}
        >Submit</button>
        // <input type="button" className="btn" value="Submit"  />
    )
};

export default BtnSubmit;