import styles from './App.module.scss';
import Navbar from "./components/Navbar/Navbar";
import Profile from './components/Profile/Profile';
import Feed from "./components/Feed/Feed";
import Calender from "./components/Calender/Calender";
import React, {useEffect, useRef, useState} from "react";
import Module from './components/Module/Module';
import Todos from "./components/Todos/Todos";
import InputButton from "./components/InputButton/InputButton";
import Grades from "./components/Grades/Grades";
import AllGrades from "./components/AllGrades/AllGrades";
import ReactDOM from "react-dom/client";

export const tabs = {
    home: 0,
    modules: 1,
    profile: 2
}


function App() {

    const [date, setDate] = useState(new Date());
    const [selectedEvents, setSelectedEvents] = useState([]);

    const [inputValue, setInputValue] = useState("");
    const handleChange = (e) => setInputValue(e.target.value);

    const [tabSelected, setTabSelected] = useState(tabs.home);
    const [todos, setTodos] = useState(["Walk the dog"]);

    const [moduleSelected, setModuleSelected] = useState(false);
    const [moduleColor, setModuleColor] = useState();
    const [moduleHighlight, setModuleHighlight] = useState();

    const [expandedModule, setExpandedModule] = useState({
        name: "COS301",
        announcements: ["No class Today!!!"],
        nextDeadlines: ["3 May - Project"]
    });


    useEffect(() => {
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

    const seeAllGrades = () => {
        setTabSelected(tabs.profile);
    }
    const addEvent = () => {

        let newEvent = {
            name: inputValue,
            date: date
        }

        setInputValue("");
        setEvents((prevEvents) => [...prevEvents, newEvent]);
        setSelectedEvents((prevEvents) => [...prevEvents, newEvent]);

        console.log(events.length);
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
        },
        {
            name: "WTW164",
            announcements: ["Math ain't mathing this week guys! I'm taking a break from this. Kind regards, your lecturer."],
            nextDeadlines: ["Absolutely nada"]
        }
    ];

    const grades = [
        {
            subject: "COS301",
            assignments: [
                {
                    name: "First Assigment",
                    grade: 44,
                    date: "1 May"
                }
            ]
        },
        {
            subject: "IMY320",
            assignments: [
                {
                    name: "Yummy Yan",
                    grade: 69,
                    date: "12 July"
                },
                {
                    name: "Delicious Diffie",
                    grade: 55,
                    date: "5 Jun"
                },
                {
                    name: "Coming soon",
                    date: "1 Oct"
                },
                {
                    name: "You will see",
                    date: "2 Nov"
                }
            ]
        },
        {
            subject: "COS333",
            assignments: [
                {
                    name: "The only semester test",
                    grade: 13,
                    date: "10 Jul"
                },
                {
                    name: "The only assignment",
                    date: "5 Jun"
                },
                {
                    name: "Get 100% for this or die",
                    date: "4 June"
                }
            ]
        },
        {
            subject: "WTW164",
            assignments: [
                {
                    name: "Calculus 1",
                    grade: 99,
                    date: "10 Jul"
                },
                {
                    name: "Trig tut test",
                    grade: 90,
                    date: "5 Jun"
                },
                {
                    name: "Algebra tut test",
                    grade: 95,
                    date: "1 Jun"
                }
            ]
        }
    ]

    const expandModule = (name, color, highlight) => {
        console.log(color);

        setModuleSelected(true);
        setModuleColor(color);
        setModuleHighlight(highlight);


        for (let m of modules) {
            if (m.name === name) {
                console.log(m);

                //expand this module
                setExpandedModule(m);
            }
        }



    }

    return (
    <div className={styles.Body}>
        <Navbar setTabSelected={setTabSelected} />

        {
            tabSelected === tabs.home &&
            <React.Fragment>

                <div className={styles.Container}>

                    <div className={styles.CalenderBox}>
                        <Calender events={events} setDate={setDate}/>
                        <div className={`${styles.EventContainer} fade-in-and-move delay4`}>
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

                            <InputButton value={inputValue} onChange={handleChange} onClick={() => {
                                addEvent();
                            }} buttonText={"Add Event"}/>

                        </div>
                    </div>

                    <Grades grades={grades} seeAllGrades={seeAllGrades}/>

                    <Feed/>

                </div>



            </React.Fragment>
        }

        {
            tabSelected === tabs.modules &&
            <div className={styles.ModulesPage}>

                {
                    !moduleSelected &&
                    <div className={styles.ModulesContainer}>
                        {
                            modules.map((el, index) => {
                                return <Module module={el.name} announcements={el.announcements}
                                               nextDeadlines={el.nextDeadlines} index={index % 4} expandModule={expandModule}/>
                            })
                        }
                    </div>

                }

                {
                    moduleSelected &&
                    <div className={styles.SelectedModule} style={{backgroundColor: moduleColor, borderLeft: `10px solid ${moduleHighlight}`}}>
                        <button className={styles.Button} onClick={() => {
                            setModuleSelected(false);
                        }}>X</button>
                        <h2>{expandedModule.name}</h2>
                    </div>

                }


                <Todos todos={todos} setTodos={setTodos}/>
            </div>
        }


        {
            tabSelected === tabs.profile &&
            <div className={styles.Container}>
                <Profile/>
                <AllGrades grades={grades}/>
                <div className={styles.Information}>
                    <h2>Registration information</h2>

                    <p className={styles.bold}>Fees due</p>
                    <p>R100 000 000</p>

                    <p className={styles.bold}>Holds</p>
                    <ul>
                        <li><p>We still need a model for the BA students, and you look too good for use to pass you yet.</p></li>
                        <li><p>Also we need tutors for next year.</p></li>
                    </ul>
                </div>
            </div>
        }

    </div>
  );
}

export default App;
