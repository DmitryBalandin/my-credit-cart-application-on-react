import React, { useState } from "react";
import "./list-card.css";
import icon from '../../icons/card_credit_debit_internet_management_payment_security_icon_127042.png'
import iconBank from '../../icons/icons-card/alfabank-red.png';
import activeKeyCard from '../../icons/icon checked active.png';
import unactiveKeyCard from '../../icons/icon checked unactive.png';

const ListCard = () => {
    const [listCardActive, setListCadrActive] = useState(false);
    const handleClick = () => {
        setListCadrActive(true);
    }

    return (
        <li className={`list-cards_card ${listCardActive? "list-cards_card__active" : ""}`} onClick={handleClick}>
            <div><img src={iconBank} alt="ID Bank" /></div>
            <div>XXXX XXXX XXXX 8908</div>
            <div>Expiries</div>
            <div className='list-card_date'>
                <span>09/27</span>
                <span>Default</span>
            </div>
            <div>
                <img src={listCardActive ? activeKeyCard:unactiveKeyCard} alt="active key card" />
            </div>
            <div></div>
        </li>
    )
};

export default ListCard;