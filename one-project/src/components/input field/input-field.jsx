import React from "react";
import './input-filed.css';

const InputField = ({ modalActive, setModalActive, value, label, type, createType, noPointer = false, ...attrs }) => {


    const handleChangeExp = ({ target: { value } }) => {
        if (!isFinite(value[value.length - 1])) {
            setModalActive({
                active: true,
                cardDate: {
                    id: modalActive.cardDate.id,
                    name: modalActive.cardDate.name,
                    number: modalActive.cardDate.number,
                    date: value.slice(0, -1),
                    img: modalActive.cardDate?.img,
                    namePerson: modalActive.cardDate?.namePerson
                }
            })
            return
        }

        // if (!isFinite(e.target.value[e.target.value.length - 1])) {
        //     e.target.value = e.target.value.slice(0, -1);
        // }
        // console.log(isFinite(e.target.value))
        let currentTarget ;
        if (value.length == 2 && +value < 13) {
            currentTarget =  value + "/";
        } else if (value.length == 2 && +value >= 13) {
            currentTarget =  value.slice(0, -1)
        }
        setModalActive({
            active: true,
            cardDate: {
                id: modalActive.cardDate.id,
                name: modalActive.cardDate.name,
                number: modalActive.cardDate.number,
                date: currentTarget,
                img: modalActive.cardDate?.img,
                namePerson: modalActive.cardDate?.namePerson
            }
        })

    }

    const handleOnKeyExp = (e) => {
        console.log('sdf')
        const value = e.target.value;
        if (e.code === "Backspace") {
            e.preventDefault()
            // if (!value || value === " " || value === "---- ---- ---- ----") {
            //     e.target.value = "---- ---- ---- ----";
            //     return
            // };
            e.target.value = value.slice(0, (value.match(/[\d\/]/g).join('').trim().length - 1));
            // if (!currentTarget) {
            //     e.target.value = "---- ---- ---- ----";
            //     changeNumber("---- ---- ---- ----")
            //     return
            // };
            // changeNumber(currentTarget);
        }
    }


    function changeNumber(value) {
        if (!isFinite(value[value.length - 1])) {
            setModalActive({
                active: true,
                cardDate: {
                    id: modalActive.cardDate.id,
                    name: modalActive.cardDate.name,
                    number: value.slice(0, -1),
                    date: modalActive.cardDate?.date,
                    img: modalActive.cardDate?.img,
                    namePerson: modalActive.cardDate?.namePerson
                }
            })
            return
        }
        let currentValue = value.match(/\d/g).join('');
        let numCard = isFinite(currentValue.trim()) && currentValue.trim().length < 17 ? `${currentValue.trim()}----------------`.slice(0, 16) : `${currentValue.slice(0, -1)}----------------`.slice(0, 16);
        setModalActive({
            active: true,
            cardDate: {
                id: modalActive.cardDate.id,
                name: modalActive.cardDate.name,
                number: numCard.replace(/(....)/g, "$1 ").slice(0, -1),
                date: modalActive.cardDate?.date,
                img: modalActive.cardDate?.img,
                namePerson: modalActive.cardDate?.namePerson
            }
        })
    }


    const handleChangeNumber = ({ target: { value } }) => {
        changeNumber(value);
    }

    const handleChangeName = ({ target: { value } }) => {
        setModalActive({
            active: true,
            cardDate: {
                id: modalActive.cardDate.id,
                name: modalActive.cardDate.name,
                number: modalActive.cardDate?.number,
                date: modalActive.cardDate?.date,
                img: modalActive.cardDate?.img,
                namePerson: value
            }
        })
    }

    const handleChangePrevent = ({ target: { value } }) => {
        setModalActive({
            active: true,
            cardDate: {
                id: modalActive.cardDate.id,
                name: modalActive.cardDate.name,
                number: modalActive.cardDate?.number,
                date: modalActive.cardDate?.date,
                img: modalActive.cardDate?.img,
                namePerson: modalActive.cardDate?.namePerson
            }
        })
    }

    const handleOnkeyNumber = (e) => {
        if (e.code === "Backspace") {
            e.preventDefault()
            const value = e.target.value;
            if (!value || value === " " || value === "---- ---- ---- ----") {
                e.target.value = "---- ---- ---- ----";
                return
            };
            const currentTarget = value.slice(0, (value.match(/[\d ]/g).join('').trim().length - 1));
            if (!currentTarget) {
                e.target.value = "---- ---- ---- ----";
                changeNumber("---- ---- ---- ----")
                return
            };
            changeNumber(currentTarget);
        }
    }

    return (
        <div className="modul__field">
            <label className="modul__field__label" htmlFor={'input' + label}>{label}</label>
            <input className={`modul__field__input ${noPointer ? "no-pointer" : ""}`}
                type={type || "text"} id={'input' + label} {...attrs}
                onChange={createType == "date" ? handleChangeExp : createType == "number" ? handleChangeNumber : createType == "name" ? handleChangeName : handleChangePrevent}
                value={value}
                onKeyDown={createType == "number" ? handleOnkeyNumber : createType == "date" ? handleOnKeyExp : null}
            />
        </div>
    )
}

export default InputField;