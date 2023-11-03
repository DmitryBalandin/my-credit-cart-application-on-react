import React, { useState } from "react";
import "./list-card.css";
import activeKeyCard from '../../icons/icon checked active.png';
import unactiveKeyCard from '../../icons/icon checked unactive.png';



const ListCard = ({ cardActive, setCardActive, listDateCard, id, setModalAcive }) => {


    const handleClick = (event) => {
        setCardActive({ active: true, id: event.currentTarget.id });
        event.stopPropagation();
    };

    const handleDOubleCLick = (event) => {
        setModalAcive({
            active: true,
            cardDate: {
                id: event.currentTarget.id,
                name: listDateCard.name,
                number: listDateCard.number,
                date: listDateCard.date,
                img: listDateCard.img,
                namePerson:listDateCard.namePerson
            }
        });

    };

    return (
        <li className={`list-cards_card ${cardActive.active && id == cardActive.id ? "list-cards_card__active" : ""}`} id={id}
            onClick={handleClick}
            onDoubleClick={(event) => handleDOubleCLick(event)}
        >
            <div><img src={listDateCard.img} alt="ID Bank" /></div>
            <div>{listDateCard.number}</div>
            <div>{listDateCard.name}</div>
            <div className='list-card_date'>
                <span>{listDateCard.date}</span>
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