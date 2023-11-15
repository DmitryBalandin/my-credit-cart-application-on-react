import React, { useState } from "react";
import './body.css'
import Header from "../header/header";
import BtnSubmit from "../btn-submit/btn-submit";
import GroupCard from "../group-card/group-card";
import Modal from "../modal/modal";

import iconBank1 from '../../icons/icons-card/alfabank-red.png';
import iconBank2 from '../../icons/icons-card/cirrus.png';
import iconBank3 from '../../icons/icons-card/egold.png';
import iconBank4 from '../../icons/icons-card/easypay.png';



const Container = () => {

    


    const [modalActive, setModalAcive] = useState({
        active: false,
        cardDate: {
            id: null,
            name: "",
            number: "",
            date: "",
            img: iconBank4,
            namePerson:""
        }
    });
    
    const [cardActive, setCardActive] = useState({
        active: false,
    });



    return (
        <div className="main-body" onClick={() => {
            setCardActive({ active: false, id: null });
        }}>
            <div className="screen" >
                <Header />
                <form action="" className="screen_form">
                    <GroupCard
                        setCardActive={setCardActive}
                        cardActive={cardActive}
                        modalActive={modalActive}
                        setModalAcive={setModalAcive}     
                    />
                    <BtnSubmit />
                </form>
            </div>
            <Modal
                modalActive={modalActive}
                setModalActive={setModalAcive}
            />
        </div>
    )
};

export default Container;
