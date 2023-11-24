import React from "react";
import './input-filed.css';

const InputField = ({ modalActive, setModalActive, value, label, type, createType, noPointer = false, ...attrs }) => {


    const handleChangeExp = (e) => {
        const value = e.target.value;

        if (!isFinite(value[value.length - 1])) {
            setModalActive({
                ...modalActive,
                cardDate: {
                    ...modalActive.cardDate,
                    date: value.slice(0, -1),
                }
            })
            return
        }
        let currentValue = value.match(/\d/g).join('');
        let numCard = isFinite(currentValue) && currentValue.length < 5 ? `${currentValue}----`.slice(0, 4) : `${currentValue.slice(0, -1)}----`.slice(0, 4);
        setModalActive({
            ...modalActive,
            cardDate: {
                ...modalActive.cardDate,
                date: numCard.replace(/(..)/g, "$1\/").slice(0, -1),
            }
        })
    }

    const handleOnKeyExp = (e) => {

        if (e.code === "Backspace") {
            let value = e.target.value;
            e.preventDefault();
            if (!value || value === " " || value === "--/--") {
                e.target.value = "--/--";
                console.log("1")
                return
            };

            const currentTarget = `${value.match(/\d/g).join('').slice(0, -1)}----`.slice(0, 4).replace(/(..)/g, "$1\/").slice(0, -1);
            setModalActive({
                ...modalActive,
                cardDate: {
                    ...modalActive.cardDate,
                    date: currentTarget,
                }
            })
        }
    }


    const changeNumber = (value) => {
        if (!isFinite(value[value.length - 1])) {
            setModalActive({
                ...modalActive,
                cardDate: {
                    ...modalActive.cardDate,
                    number: value.slice(0, -1),
                }
            })
            return
        }
        let currentValue = value.match(/\d/g).join('');
        let numCard = isFinite(currentValue.trim()) && currentValue.trim().length < 17 ? `${currentValue.trim()}----------------`.slice(0, 16) : `${currentValue.slice(0, -1)}----------------`.slice(0, 16);
        setModalActive({
            ...modalActive,
            cardDate: {
                ...modalActive.cardDate,
                number: numCard.replace(/(....)/g, "$1 ").slice(0, -1),
            }
        })
    }


    const handleChangeNumber = ({ target: { value } }) => {
        changeNumber(value);
    }

    const handleChangeName = ({ target: { value } }) => {
        setModalActive({
            ...modalActive,
            cardDate: {
                ...modalActive.cardDate,
                namePerson: value
            }
        })
    }

    const handleChangePrevent = ({ target: { value } }) => {
        setModalActive({
            ...modalActive,
            cardDate: {
                ...modalActive.cardDate,
                crv: value,
            }
        })
    }

    const handleOnkeyNumber = (e) => {
        if (e.code === "Backspace") {
            e.preventDefault()
            if (!value || value === " " || value === "---- ---- ---- ---" ||
                value.match(/\d/g).join().length < 2) {
                e.target.value = "---- ---- ---- ----";
                changeNumber("---- ---- ---- ----");
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

    const onChangeType = {
        "number": handleChangeNumber,
        "date": handleChangeExp,
        "name": handleChangeName
    };


    const onkeyDownType = {
        "number": handleOnkeyNumber,
        "date": handleOnKeyExp,
    };

    return (
        <div className="modul__field">
            <label className="modul__field__label" htmlFor={'input' + label}>{label}</label>
            <input className={`modul__field__input ${noPointer ? "no-pointer" : ""}`}
                type={type || "text"} id={'input' + label} {...attrs}
                onChange={onChangeType[createType] || handleChangePrevent}
                value={value}
                onKeyDown={onkeyDownType[createType] || null}
            />
        </div>
    )
}

export default InputField;