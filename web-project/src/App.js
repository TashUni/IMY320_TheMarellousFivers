import styles from './App.module.scss';
import Navbar from "./components/Navbar/Navbar";
import Profile from './components/Profile/Profile';
import Feed from "./components/Feed/Feed";
import Calender from "./components/Calender/Calender";

function App() {
    return (
    <div className={styles.Body}>
        <Navbar />
        <div className={styles.Container}>
            <Profile />
            <Feed />
            <Calender/>
        </div>

    </div>
  );
}

export default App;
