import React, { useState } from "react";
import './btn-submit.css'
import classNames from 'classnames/bind';

import iconBank1 from '../../icons/icons-card/alfabank-red.png';
import iconBank2 from '../../icons/icons-card/cirrus.png';
import iconBank3 from '../../icons/icons-card/egold.png';
import iconBank4 from '../../icons/icons-card/easypay.png';

const BtnSubmit = ({ classes, children = "Submit ", listDateCard,
    setListCardDate, modalActive, setModalActive, action }) => {

    const defaultStateModal = {
        active: false,
        addPayment: false,
        cardDate: {
            id: null,
            name: "",
            number: "",
            date: "",
            namePerson: "",
            crv: "",
        }
    };

    const handleClickCancelCard = () => {
        const listCardUnderCancel = listDateCard.filter((value, index) => {
            return index != +modalActive.cardDate.id;
        })
        setListCardDate(listCardUnderCancel);
        setModalActive(defaultStateModal)
    }

    const handleClickCardRedaction = () => {

        const listsCardRadactionDateCard = listDateCard.map((value, index) => {
            return index != +modalActive.cardDate.id ? value : {
                ...value,
                number: modalActive.cardDate?.number,
                date: modalActive.cardDate?.date,
                namePerson: modalActive.cardDate?.namePerson,
                crv: modalActive.cardDate?.crv
            }
        })
        setListCardDate(listsCardRadactionDateCard);
        setModalActive(defaultStateModal)
    };

    const handleCloseModal = () => {
        setModalActive(defaultStateModal)
    }

    const handleClickAddCard = () => {
        const newListCard = [...listDateCard]
        console.log(newListCard);
        newListCard.push({
            name: "Expiries",
            number: modalActive.cardDate?.number,
            date: modalActive.cardDate?.date,
            img: iconBank2,
            namePerson: modalActive.cardDate?.namePerson,
            crv: modalActive.cardDate?.crv
        })
        console.log(newListCard);
        setListCardDate(newListCard);

        setModalActive(defaultStateModal)
    }

    const clickBtn = {
        "cancel": handleClickCancelCard,
        "redact": handleClickCardRedaction,
        "add-card": handleClickAddCard,
        "close": handleCloseModal
    }
    return (

        <button onClick={clickBtn[action]}
            type="button" className={classNames('btn', classes)
            }
        >{children}</button>

    )
};

export default BtnSubmit;