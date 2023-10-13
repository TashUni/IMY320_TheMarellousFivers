import styles from './announcement.module.scss';
import {useState} from "react";
import {Fragment} from "react";

function Announcement(props) {

    const [isExpanded, setExpanded] = useState();

    const bottomBarStyle = {
        backgroundColor: props.color,
        color: props.isWhite ? "white" : "black"
    }

    return (
        <>
            {
                !isExpanded &&
                <div onClick={() => setExpanded(true)} className={styles.Container}>
                    <div className={styles.TopBar}>
                        <h2 className={styles.h2}>{props.heading}</h2>
                        <div className={styles.img}>
                            <img alt="profile" src={props.profilePhoto}/>
                        </div>

                    </div>
                    <div>
                        <p className={styles.p}>{props.content.length > 300 ? props.content.substring(0, 300) + "..." : props.content}</p>
                    </div>
                    <div style={bottomBarStyle} className={styles.BottomBar}>{props.module}</div>
                </div>
            }

            {
                isExpanded &&
                <Fragment>
                <div className={styles.BackPanel} onClick={() => setExpanded(false)}></div>
                <div className={styles.ExpandedAnnouncement}>
                    <div className={styles.InnerContent}>
                        <div className={styles.TopBarExpanded}>
                            <h2 className={styles.h2}>{props.heading}</h2>
                            <div className={`${styles.img} ${styles.expandedImg}`}>
                                <img alt="profile" src={props.profilePhoto}/>
                            </div>
                            <button className={styles.Button} onClick={() => setExpanded(false)}>X</button>
                        </div>
                        <div className={styles.expandedPara}>
                            <p className={styles.p}>{props.content}</p>
                        </div>
                        <div style={bottomBarStyle} className={styles.BottomBar}>{props.module}</div>
                    </div>
                </div>

                </Fragment>
            }



        </>
    )
}

export default Announcement;