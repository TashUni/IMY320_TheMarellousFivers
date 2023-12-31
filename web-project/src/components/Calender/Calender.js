import React, {useEffect, useState} from "react";
import Calendar from "react-calendar";
import './calender.scss';
import styles from './calenderStyles.module.scss';

function Calender({events, setDate}) {

    const [value, onChange] = useState(new Date());

    useEffect(() => {
        setDate(value);
    }, [value]);

    function isSameDay(date1, date2) {
        return (
            date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        );
    }

    const getTiles = ({date, view}) => {

        const today = new Date();

         if (events.some((eventDate) => isSameDay(eventDate.date, date))) {
            return (
                <div className={styles.eventDotContainer}>
                    <div className={styles.eventDot}></div>
                </div>
            )
        }
        return null;
    }

    return (
        <div className={"fade-in-and-move delay2"}>
            <Calendar onChange={onChange} value={value} tileContent={getTiles} />
        </div>
    );
}

export default Calender;