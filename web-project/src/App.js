import styles from './App.module.scss';
import {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Profile from './components/Profile/Profile';
import Feed from "./components/Feed/Feed";

function App() {
    return (
    <div className={styles.Body}>
        <Navbar />
        <div className={styles.Container}>
            <Profile />
            <Feed />
        </div>
    </div>
  );
}

export default App;
