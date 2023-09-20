import styles from './Header.module.scss';


function Header(props) {
    return (
        <div className={styles.Container}>
            <div className={styles.Header}>
                <h1 className={styles.h1}>Hi, Josh</h1>
                <p className={styles.p}>Today is Monday 11 September 2023</p>
            </div>
            <div className={styles.SearchBox}>
                <input placeholder={"Search your modules..."} />
                <img src="icons/search.png" />
            </div>
        </div>

    );
}

export default Header;