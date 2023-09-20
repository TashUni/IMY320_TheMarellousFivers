import logo from './logo.svg';
import styles from './App.module.scss';
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={styles.App}>
        <SideBar/>
      <div>
        <Header />
      </div>
    </div>
  );
}

export default App;
