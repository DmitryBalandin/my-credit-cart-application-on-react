import React from 'react'
import './list-card.css'
import icon from '../../icons/card_credit_debit_internet_management_payment_security_icon_127042.png'
import iconBank from '../../icons/icons-card/alfabank-red.png'
import activeKeyCard from '../../icons/icon checked active.png'
import unactiveKeyCard from '../../icons/icon checked unactive.png'

const ListCard = () => {
    return (
        <ul className='list-cards'>
            <li className='list-cards_card list-cards_card__active'>
                <div><img src={iconBank} alt="ID Bank" /></div>
                <div>XXXX XXXX XXXX 8908</div>
                <div>Expiries</div>
                <div className='list-card_date'>
                    <span>09/27</span>
                    <span>Default</span>
                </div>
                <div>
                    <img src={activeKeyCard} alt="active key card" />
                </div>
                <div></div>
            </li>
            <li className='list-cards_card'>
                <div><img src={iconBank} alt="ID Bank" /></div>
                <div>XXXX XXXX XXXX 8908</div>
                <div>Expiries</div>
                <div className='list-card_date'>
                    <span>09/27</span>
                    <span>Default</span>
                </div>
                <div>
                    <img src={unactiveKeyCard} alt="active key card" />
                </div>
                <div></div>
            </li>
            <li className='list-cards_card'>
                <div><img src={iconBank} alt="ID Bank" /></div>
                <div>XXXX XXXX XXXX 8908</div>
                <div>Expiries</div>
                <div className='list-card_date'>
                    <span>09/27</span>
                    <span>Default</span>
                </div>
                <div>
                    <img src={unactiveKeyCard} alt="unactive key card" />
                </div>
                <div></div>
            </li>
            <li className='list-cards_card'>
                <img src={icon} alt="ID CARD" />
                <p>Add Payment Method</p>
            </li>
        </ul>
    )
};

export default ListCard;