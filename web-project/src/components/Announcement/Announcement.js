import styles from './announcement.module.scss';

function Announcement(props) {

    const bottomBarStyle = {
        backgroundColor: props.color,
        color: props.isWhite ? "white" : "black"
    }
    return (
            <div className={styles.Container}>
                <div className={styles.TopBar}>
                    <h2 className={styles.h2}>{props.heading}</h2>
                    <div className={styles.img}>
                        <img alt="profile" src={props.profilePhoto}/>
                    </div>
                </div>
                <div>
                    <p className={styles.p}>{props.content}</p>
                </div>
                <div style={bottomBarStyle} className={styles.BottomBar}>{props.module}</div>
            </div>
    )
}

export default Announcement;