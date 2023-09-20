import styles from './Header.module.scss';

function Header(props) {
    return (
        <div className={styles.Header}>
            <h1>Hi, Josh</h1>
            <p>Today is Monday 11 September 2023</p>
        </div>
    );
}

export default Header;