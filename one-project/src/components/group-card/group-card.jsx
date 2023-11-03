import React, { useState } from 'react';
import './group-card.css';
import ListCard from '../list card/list-card';
import icon from '../../icons/card_credit_debit_internet_management_payment_security_icon_127042.png'


const GroupCard = ({ cardActive, setCardActive, setModalAcive, cardDate }) => {

    return (
        <ul className='list-cards'>{cardDate.map((value, index) =>
            <ListCard setCardActive={setCardActive}
                cardActive={cardActive}
                listDateCard={value} key={index} id={index}
                setModalAcive={setModalAcive}
            />)}

            <li className='list-cards_card' onClick={() => setModalAcive({active:true})}>
                <img src={icon} alt="ID CARD" />
                <p>Add Payment Method</p>
            </li>
        </ul>
    )
};

export default GroupCard;