import styles from './announcement.module.scss';
import {useState} from "react";
import {Fragment} from "react";


function Announcement(props) {

    const [isExpanded, setExpanded] = useState(false);

    const bottomBarStyle = {
        backgroundColor: props.color,
        color: props.isWhite ? "white" : "black"
    }

    return (
        <>
            {
                !isExpanded &&

                <div onClick={() => { setExpanded(true); }} className={styles.Container}>
                    <div className={styles.TopBar}>
                        <h2 className={styles.h2}>{props.heading}</h2>
                        <div className={styles.img}>
                            <img alt="profile" src={props.profilePhoto}/>
                        </div>

                    </div>
                    <div>
                        <p className={styles.p}>{props.content.join(" ").length > 300 ? props.content.join(" ").substring(0, 300) + "..." : props.content}</p>
                    </div>
                    <div style={bottomBarStyle} className={styles.BottomBar}>{props.module}</div>
                </div>
            }

            {
                isExpanded &&

                <div className={styles.Outline}>
                    <div className={styles.ExpandedAnnouncement}>
                            <div className={styles.TopBarExpanded}>
                                <h2 className={styles.h2}>{props.heading}</h2>
                                <div className={`${styles.img} ${styles.expandedImg}`}>
                                    <img alt="profile" src={props.profilePhoto}/>
                                </div>

                                <button className={styles.Button} onClick={() => {
                                    setExpanded(false);
                                }}>X</button>

                            </div>

                            <div className={styles.scrollable}>
                                <div className={styles.expandedPara}>
                                    {
                                        props.content.map((el) => {
                                            return <p className={styles.p}>{el}</p>
                                        })
                                    }
                                </div>
                                <div className={styles.smallImage}>
                                    {
                                        props.images.map((el) => {
                                            console.log(el);
                                            return <img  alt="annoucement Image" src={require(`./images/imgAnn1.jpeg`)}></img>
                                        })
                                    }
                                </div>
                            </div>
                            <div style={bottomBarStyle} className={styles.BottomBar}>{props.module}</div>

                    </div>
                </div>

            }



        </>
    )
}

export default Announcement;