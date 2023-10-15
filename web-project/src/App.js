import styles from './App.module.scss';
import Navbar from "./components/Navbar/Navbar";
import Profile from './components/Profile/Profile';
import Feed from "./components/Feed/Feed";
import Calender from "./components/Calender/Calender";
import {useEffect, useState, Fragment} from "react";
import Module from './components/Module/Module';
import Todos from "./components/Todos/Todos";
import InputButton from "./components/InputButton/InputButton";
import Grades from "./components/Grades/Grades";
import AllGrades from "./components/AllGrades/AllGrades";
import AboutUs from "./components/AboutUs/AboutUs";
import Splash from "./components/Splash/Splash";

export const tabs = {
    home: 0,
    modules: 1,
    profile: 2,
    about: 3,
    splash: 4
}


function App() {

    const [date, setDate] = useState(new Date());
    const [selectedEvents, setSelectedEvents] = useState([]);

    const [inputValue, setInputValue] = useState("");
    const handleChange = (e) => setInputValue(e.target.value);

    const [tabSelected, setTabSelected] = useState(tabs.splash);
    const [todos, setTodos] = useState([
        "Complete Math Assignment",
        "Attend Computer Science Lecture at 10 AM",
        "Buy groceries for the week",
        "Prepare for History Exam on Friday",
        "Meet with Academic Advisor at 2 PM",
        "Go for a run in the evening",
        "Submit Literature Review for Research Project",
        "Schedule dentist appointment",
        "Work on Coding Project for Software Engineering Class",
        "Plan weekend study group session",
        "Attend Psychology Workshop at 3 PM",
        "Update Resume for Internship Applications",
        "Organize study materials for upcoming exams",
        "Practice guitar for 30 minutes",
        "Attend Club Meeting at 5 PM"
    ]);

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
            announcements: [
                {
                    heading: "No class Today!!!",
                    content: "I've decided to not have class today, have a nice time",
                    date: "10 January"
                },
                {
                    heading: "I'm done with you guys!",
                    content: "It's almost the end of the year, so bugger off!",
                    date: "15 February"
                },
                {
                    heading: "Boom Boom, the test is near!!!",
                    content: "All fear me, the test is near!!!\nYou will regret it if you dont' study",
                    date: "20 March"
                }
            ],
            nextDeadlines: [
                "10 April - Literature Review Deadline",
                "27 May - Case Study Submission",
                "15 July - Group Presentation",
                "08 September - Coding Challenge Due Date",
                "19 October - Research Proposal Submission",
                "12 November - Online Exam Deadline",
                "02 December - Final Report Submission"
            ]
        },
        {
            name: "COS333",
            announcements: [
                {
                    heading: "Next programming practical has been postponed",
                    content: "Have a break! Have a kitkat",
                    date: "5 April"
                },
                {
                    heading: "Exciting News for Coders!",
                    content: "New programming languages workshop this Saturday!\nDon't miss it!",
                    date: "12 April"
                },
                {
                    heading: "Important Update: Python Bootcamp",
                    content: "Python Bootcamp sessions have been rescheduled.\nCheck your email for details.",
                    date: "18 April"
                },
                {
                    heading: "JavaScript Fundamentals Workshop",
                    content: "Learn the basics of JavaScript programming language.\nJoin us on 25th April!",
                    date: "25 April"
                }
            ],
            nextDeadlines: [
                "10 April - Literature Review Deadline",
                "27 May - Case Study Submission",
                "15 July - Group Presentation",
                "08 September - Coding Challenge Due Date",
                "19 October - Research Proposal Submission",
                "12 November - Online Exam Deadline",
                "02 December - Final Report Submission"]
        },
        {
            name: "IMY320",
            announcements: [
                {
                    heading: "Yasss",
                    content: "More work! (We are trying to overtake 301)"
                },
                {
                    heading: "The lecturers need a break...",
                    content: "Go home and have a party. I'll mark you tests later."
                },
                {
                    heading: "IMY320 Workshop Postponed",
                    content: "Due to unforeseen circumstances, the UX/UI workshop scheduled for this week has been postponed. Stay tuned for the updated schedule.",
                    date: "3 May"
                },
                {
                    heading: "Exciting News for UX/UI Enthusiasts!",
                    content: "New module resources added to the IMY320 online portal.\nExplore the latest design trends and tools!",
                    date: "8 May"
                },
                {
                    heading: "Guest Speaker Session: Interaction Design Experts",
                    content: "Join us on 15th May for an insightful session with industry experts in interaction design. Learn from the best!",
                    date: "10 May"
                },
                {
                    heading: "IMY320 Project Showcase",
                    content: "Get ready for the IMY320 project showcase event on 22nd May. Present your innovative UX/UI designs and impress the audience!",
                    date: "17 May"
                },
                {
                    heading: "User Testing Workshop",
                    content: "Enhance your UX/UI skills by attending our user testing workshop on 27th May. Learn practical techniques for effective user feedback.",
                    date: "20 May"
                },
                {
                    heading: "Design Challenge Announcement",
                    content: "Participate in the IMY320 design challenge and stand a chance to win exciting prizes! Challenge details will be shared soon.",
                    date: "25 May"
                }],
            nextDeadlines: [
                "12 May - Research Paper Submission",
                "18 June - Group Project Presentation",
                "05 August - Online Quiz Deadline",
                "22 September - Lab Report Due Date",
                "08 October - Coding Assignment Submission",
                "16 November - Final Project Proposal",
                "03 December - Thesis Defense"
            ]
        },
        {
            name: "WTW164",
            announcements: [
                {
                    heading: "Calculus Quiz Reminder",
                    content: "Friendly reminder: The Calculus quiz is scheduled for this Friday. Make sure to review your derivatives and integrals!",
                    date: "7 June"
                },
                {
                    heading: "Calculus Problem Solving Workshop",
                    content: "Join us on 12th June for a problem-solving workshop. We'll tackle challenging calculus problems together. Don't miss out!",
                    date: "10 June"
                },
                {
                    heading: "Guest Lecture by Renowned Mathematician",
                    content: "Exciting news! A renowned mathematician will deliver a guest lecture on advanced calculus concepts on 17th June. Be prepared for mind-expanding ideas!",
                    date: "14 June"
                },
                {
                    heading: "Calculus Lab Sessions Begin",
                    content: "Starting 20th June, we will have weekly lab sessions to explore real-life applications of calculus. Get ready for hands-on learning!",
                    date: "17 June"
                },
                {
                    heading: "Calculus Revision Marathon",
                    content: "Prepare for your upcoming calculus exams by joining our revision marathon on 25th June. We'll cover all major topics and answer your questions.",
                    date: "22 June"
                },
                {
                    heading: "Calculus Final Exam Date Announced",
                    content: "The Calculus final exam is scheduled for 30th June. Start your preparations early and reach out to us if you need additional study resources.",
                    date: "27 June"
                }],
            nextDeadlines: [
                "20 October - Assignment 1 Due Date",
                "25 October - Quiz 1 Deadline",
                "05 November - Midterm Exam Date",
                "10 November - Project Proposal Submission",
                "15 November - Assignment 2 Due Date",
                "20 November - Quiz 2 Deadline",
                "25 November - Guest Lecture on Module Topic",
                "05 December - Final Project Presentation",
                "10 December - Revision Session for Final Exam",
                "15 December - Final Exam Date"
            ]
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

        {
            tabSelected === tabs.splash &&
            <Splash setTabSelected={setTabSelected}/>
        }

        {
            tabSelected != tabs.splash &&
            <Fragment>
                <Navbar setTabSelected={setTabSelected} />

                {
                    tabSelected === tabs.home &&
                    <Fragment>

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



                    </Fragment>
                }

                {
                    tabSelected === tabs.modules &&
                    <div className={styles.ModulesPage}>

                        {
                            !moduleSelected &&
                            <div className={styles.ModulesContainer}>
                                {
                                    modules.map((el, index) => {
                                        return <Module fadeClass={`fade-in-and-move delay ${index + 1}`} module={el.name} announcements={el.announcements}
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
                                <div className={styles.divide}>
                                    <div>
                                        <h3>Announcements</h3>
                                        <div className={styles.scroll}>
                                            {
                                                expandedModule.announcements.map((el) => {
                                                    return <div class={styles.ExpandedAnnoucement}>
                                                        <div>{el.heading}</div>
                                                        <div>{el.content}</div>
                                                        <div>{el.date}</div>
                                                    </div>
                                                })
                                            }</div>
                                    </div>
                                    <div>
                                        <h3>Deadlines</h3>
                                        <ul>
                                            {
                                                expandedModule.nextDeadlines.map((el) => {
                                                    return <li className={styles.ExpandedDeadline}>{el}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
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
                        <div className={`${styles.Information} fade-in-and-move delay3`}>
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

                {
                    tabSelected == tabs.about &&
                    <AboutUs/>
                }
            </Fragment>
        }



    </div>
  );
}

export default App;
