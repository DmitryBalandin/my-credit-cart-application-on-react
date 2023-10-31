import React, { useState } from "react";
import './body.css'
import Header from "../header/header";
import BtnSubmit from "../btn-submit/btn-submit";
import GroupCard from "../group-card/group-card";
import Modal from "../modal/modal";
const Container = () => {
    const [modalActive, setModalAcive] = useState(true)
    return (
        <>
            <div className="screen">
                <Header />
                <form action="" className="screen_form">
                    <GroupCard />
                    <BtnSubmit setModalAcive={setModalAcive}/>
                </form>
            </div>
            <Modal active={modalActive} setActive={setModalAcive}/>
        </>
    )
};

export default Container;