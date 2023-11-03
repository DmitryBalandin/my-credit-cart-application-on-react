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

    const listDateCard =
        [{
            name: "Expiries",
            number: "1234 1234 1243 5645",
            date: "09/13",
            img: iconBank1,
            namePerson:"Ivan Stallone"
        }, {
            name: "Expiries",
            number: "3245 7876 9878 7876",
            date: "06/17",
            img: iconBank2,
            namePerson:"Igor Shreck"
        }, {
            name: "Expiries",
            number: "3245 7876 9878 7876",
            date: "08/24",
            img: iconBank3,
            namePerson:"Maili Sayrys"
        }, {
            name: "Expiries",
            number: "3435 8797 9658 3455",
            date: "07/08",
            img: iconBank4,
            namePerson:"Bendgamin Button"
        }];


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

    const [cardDate, setCardToCardDate] = useState(listDateCard);

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
                        setModalAcive={setModalAcive}
                        cardDate={cardDate}
                    />
                    <BtnSubmit />
                </form>
            </div>
            <Modal
                modalActive={modalActive}
                setActive={setModalAcive}
            />
        </div>
    )
};

export default Container;
