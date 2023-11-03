import React, { useState } from "react";
import './btn-submit.css'
import classNames from 'classnames/bind';

const BtnSubmit = ({ classes, children = "Submit "}) => {
    
    return (
        <button type="button" className={classNames('btn',classes)} 
        >{children}</button>

    )
};

export default BtnSubmit;