import styles from './App.module.scss';
import Navbar from "./components/Navbar/Navbar";
import Profile from './components/Profile/Profile';
import Feed from "./components/Feed/Feed";
import Calender from "./components/Calender/Calender";
import {useEffect, useState} from "react";


function App() {

    const [date, setDate] = useState(new Date());
    const [selectedEvents, setSelectedEvents] = useState([]);

    useEffect(() => {
        console.log("updating date value to " + date);

        //loop through events and select the ones that are the same date
        let newEvents = events.filter((element) =>
                element.date.getDay() === date.getDay() &&
                    element.date.getMonth() === date.getMonth() &&
                    element.date.getFullYear() === date.getFullYear()
            );

        setSelectedEvents(newEvents);

    }, [date])

    const [events, setEvents] = useState([
        {
            name: "Coffee",
            date: new Date("2023-09-23")
        },
        {
            name: "Tea",
            date: new Date("2023-09-24"),
        }
    ])

    return (
    <div className={styles.Body}>
        <Navbar />
        <div className={styles.Container}>
            <Profile />
            <Feed />
            <div className={styles.CalenderBox}>
                <Calender events={events} setDate={setDate}/>
                <div className={styles.EventContainer}>
                    <p className={styles.EventContainerPara}>Events on <u>{date.toDateString()}:</u></p>

                    {
                        selectedEvents.length === 0 ?
                            <p className={styles.noEvents}>No events</p> :
                            <ul className={styles.ul}>
                                {
                                    selectedEvents.map((el) => {
                                        return <li>{el.name}</li>
                                    })
                                }
                            </ul>
                    }

                </div>
            </div>
        </div>

    </div>
  );
}

export default App;
