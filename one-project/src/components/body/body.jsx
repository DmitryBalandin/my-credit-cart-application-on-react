import React, { useState } from "react";
import './body.css'
import Header from "../header/header";
import BtnSubmit from "../btn-submit/btn-submit";
import ListCard from "../list-card/list-card";
import Modal from "../modal/modal";
const Container = () => {
    const [modalActive, setModalAcive] = useState(true)
    return (
        <>
            <div className="screen">
                <Header />
                <form action="" className="screen_form">
                    <ListCard />
                    <BtnSubmit setModalAcive={setModalAcive}/>
                </form>
            </div>
            <Modal active={modalActive} setActive={setModalAcive}/>
        </>
    )
};

export default Container;