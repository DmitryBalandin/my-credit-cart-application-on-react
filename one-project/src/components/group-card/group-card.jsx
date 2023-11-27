import React, { useState } from 'react';
import './group-card.css';
import ListCard from '../list card/list-card';
import icon from '../../icons/card_credit_debit_internet_management_payment_security_icon_127042.png'
import iconBank1 from '../../icons/icons-card/alfabank-red.png';
import iconBank2 from '../../icons/icons-card/cirrus.png';
import iconBank3 from '../../icons/icons-card/egold.png';
import iconBank4 from '../../icons/icons-card/easypay.png';

const GroupCard = ({ cardActive, setCardActive, setModalAcive, modalActive,listDateCard }) => {


    return (
        <ul className='list-cards'>{listDateCard.map((value, index) =>
            <ListCard setCardActive={setCardActive}
                cardActive={cardActive}
                valueDateCard={value} key={index} id={index}
                setModalAcive={setModalAcive}
                modalActive={modalActive}
            />)}

            <li className='list-cards_card' onClick={() => setModalAcive({active:true, addPayment:true})}>
                <img src={icon} alt="ID CARD" />
                <p>Add Payment Method</p>
            </li>
        </ul>
    )
};

export default GroupCard;