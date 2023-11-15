import React, { useState } from 'react';
import './group-card.css';
import ListCard from '../list card/list-card';
import icon from '../../icons/card_credit_debit_internet_management_payment_security_icon_127042.png'
import iconBank1 from '../../icons/icons-card/alfabank-red.png';
import iconBank2 from '../../icons/icons-card/cirrus.png';
import iconBank3 from '../../icons/icons-card/egold.png';
import iconBank4 from '../../icons/icons-card/easypay.png';

const GroupCard = ({ cardActive, setCardActive, setModalAcive, modalActive }) => {
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

    return (
        <ul className='list-cards'>{listDateCard.map((value, index) =>
            <ListCard setCardActive={setCardActive}
                cardActive={cardActive}
                listDateCard={value} key={index} id={index}
                setModalAcive={setModalAcive}
                modalActive={modalActive}
            />)}

            <li className='list-cards_card' onClick={() => setModalAcive({active:true})}>
                <img src={icon} alt="ID CARD" />
                <p>Add Payment Method</p>
            </li>
        </ul>
    )
};

export default GroupCard;