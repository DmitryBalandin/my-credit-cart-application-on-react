import React, { useState } from "react";
import "./list-card.css";
import activeKeyCard from '../../icons/icon checked active.png';
import unactiveKeyCard from '../../icons/icon checked unactive.png';



const ListCard = ({ cardActive, setCardActive, valueDateCard, id, setModalAcive,modalActive }) => {


    const handleClick = (event) => {
        setCardActive({ active: true, id: event.currentTarget.id });
        event.stopPropagation();
    };

    const handleDOubleCLick = (event) => {
        setModalAcive({
            active: true,
            addPayment:false,
            cardDate: {
                id: event.currentTarget.id,
                name: valueDateCard.name,
                number: valueDateCard.number,
                date: valueDateCard.date,
                img: valueDateCard.img,
                namePerson:valueDateCard.namePerson,
                crv: valueDateCard.crv,
            }
        });

    };

    return (
        <li className={`list-cards_card ${cardActive.active && id == cardActive.id ? "list-cards_card__active" : ""}`} id={id}
            onClick={handleClick}
            onDoubleClick={(event) => handleDOubleCLick(event)}
        >
            <div><img src={valueDateCard.img} alt="ID Bank" /></div>
            <div>{valueDateCard.number}</div>
            <div>{valueDateCard.name}</div>
            <div className='list-card_date'>
                <span>{valueDateCard.date}</span>
                <span>Default</span>
            </div>
            <div>
                <img src={cardActive.active && id == cardActive.id ? activeKeyCard : unactiveKeyCard} alt="active key card" />
            </div>
            <div></div>
        </li>
    )
};

export default ListCard;