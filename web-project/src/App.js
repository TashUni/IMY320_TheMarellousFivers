import styles from './App.module.scss';
import Navbar from "./components/Navbar/Navbar";
import Profile from './components/Profile/Profile';
import Feed from "./components/Feed/Feed";
import Calender from "./components/Calender/Calender";
import {useState} from "react";


function App() {
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
            <Calender events={events} setEvents={setEvents}/>
        </div>

    </div>
  );
}

export default App;
