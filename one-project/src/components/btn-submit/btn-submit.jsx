import React, { useState } from "react";
import './btn-submit.css'

const BtnSubmit = ({ setModalAcive, children = "Submit "}) => {

    return (
        <button type="button" className="btn" onClick={() => setModalAcive(true)}
        >{children}</button>

    )
};

export default BtnSubmit;