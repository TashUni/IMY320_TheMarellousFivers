import styles from './App.module.scss';
import Navbar from "./components/Navbar/Navbar";
import Profile from './components/Profile/Profile';
import Feed from "./components/Feed/Feed";
import Calender from "./components/Calender/Calender";
import {useEffect, useRef, useState} from "react";
import Module from './components/Module/Module';

export const tabs = {
    home: 0,
    modules: 1,
    profile: 2
}

function App() {

    const [date, setDate] = useState(new Date());
    const [selectedEvents, setSelectedEvents] = useState([]);
    const inputRef = useRef(null);
    const [tabSelected, setTabSelected] = useState(tabs.modules);

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

    useEffect(() => {
        console.log("tab: " + tabSelected);
    }, [tabSelected])

    const addEvent = () => {

        console.log("adding...");
        console.log(date);

        console.log(inputRef.current.value)

        let newEvent = {
            name: inputRef.current.value,
            date: date
        }

        inputRef.current.value = "";

        setEvents((prevEvents) => [...prevEvents, newEvent]);
        setSelectedEvents((prevEvents) => [...prevEvents, newEvent]);
    }

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

    const modules = [
        {
            name: "COS301",
            announcements: ["No class Today!!!"],
            nextDeadlines: ["3 May - Project"]
        },
        {
            name: "COS333",
            announcements: ["Next programming practical has been postponed"],
            nextDeadlines: ["12 May - Read chapter 1"]
        },
        {
            name: "IMY320",
            announcements: ["More work! (We are trying to overtake 301)", "The lecturers need a break..."],
            nextDeadlines: ["4 May - Individual assignment"]
        }
    ];

    return (
    <div className={styles.Body}>
        <Navbar setTabSelected={setTabSelected} />

        {
            tabSelected === tabs.home &&
                <div className={styles.Container}>
                <Profile />
                <Feed />
                <div className={styles.CalenderBox}>
                    <Calender events={events} setDate={setDate}/>
                    <div className={styles.EventContainer}>
                        <div>
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

                        <div className={styles.inputBox}>
                            <input type="text" ref={inputRef}/>
                            <button onClick={addEvent} >Add Event</button>
                        </div>

                    </div>
                </div>
            </div>
        }

        {
            tabSelected === tabs.modules &&
            <div className={styles.ModulesPage}>
                <div className={styles.ModulesContainer}>
                    {
                        modules.map((el, index) => {
                            return <Module module={el.name} announcements={el.announcements} nextDeadlines={el.nextDeadlines} index={index % 4}/>
                        })
                    }
                </div>
                <div className={styles.UpcomingToday}>

                </div>
            </div>
        }

    </div>
  );
}

export default App;
