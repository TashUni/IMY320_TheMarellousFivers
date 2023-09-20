import  styles from './SideBar.module.scss'

function SideBar(props) {
    return <div className={styles.container}>

        <h1 className={styles.heading}>Click<span>UP</span></h1>
        <nav className={styles.topNav}>
            <div className={styles.active}>DashBoard</div>
            <div>Stream</div>
            <div>Calender</div>
            <div>Grades</div>
        </nav>
        <hr/>
        <nav className={styles.bottomNav}>
            <div className={styles.recent}>Recent</div>
            <div>COS301</div>
            <div>WTW238</div>
            <div>IMY300</div>
        </nav>
        <nav className={`${styles.bottomNav} ${styles.larger}`}>
            <hr/>
            <div>Settings</div>
            <div>Logout</div>
        </nav>


    </div>;
}


export default SideBar;