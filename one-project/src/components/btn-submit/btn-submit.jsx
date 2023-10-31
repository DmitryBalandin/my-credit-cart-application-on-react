import React, { useState } from "react";
import './btn-submit.css'
import classNames from 'classnames/bind';

const BtnSubmit = ({ setModalAcive, classes, children = "Submit "}) => {
    
    return (
        <button type="button" className={classNames('btn',classes)} onClick={() => setModalAcive(true)}
        >{children}</button>

    )
};

export default BtnSubmit;