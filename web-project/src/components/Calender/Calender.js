import React, {useEffect, useState} from "react";
import Calendar from "react-calendar";
import './calender.scss';
import styles from './calenderStyles.scss';

function Calender() {
    const [value, onChange] = useState(new Date());
    const [eventDates, setEventDates] = useState([
        new Date("2023-09-25"),
        new Date("2023-09-28"),
    ])

    useEffect(() => {
        console.log("selected date: " + value);
    }, [value]);


    function isSameDay(date1, date2) {
        return (
            date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        );
    }

    const getTiles = ({date, view}) => {
        if (eventDates.some((eventDate) => isSameDay(eventDate, date))) {
            console.log("Match");
            return <div className="event-dot-container">
                <div className="event-dot"></div>
            </div>
        }
    }

    return (
        <div>
            <Calendar onChange={onChange} value={value} tileContent={getTiles} />
        </div>
    );
}

export default Calender;