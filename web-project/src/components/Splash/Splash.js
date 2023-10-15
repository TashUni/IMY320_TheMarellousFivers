import styles from './Splash.module.scss';
import {tabs} from "../../App";

function Splash(props) {
    return (
        <div className={styles['splash-container']}>
            <h1>Welcome to Student Life Management</h1>
            <p>Empowering students to succeed through effective module management and balanced lifestyles.</p>
            <div className={styles.features}>
                <div className={styles.feature}>
                    <h2>Efficient Module Management</h2>
                    <p>Organize your courses, assignments, and exams in one place. Stay on top of your academic commitments effortlessly.</p>
                </div>
                <div className={styles.feature}>
                    <h2>Healthy Work-Life Balance</h2>
                    <p>Discover tips and resources to maintain a healthy balance between studies, social life, and self-care. Your well-being matters!</p>
                </div>
                <div className={styles.feature}>
                    <h2>Interactive Learning</h2>
                    <p>Engage with interactive study materials, quizzes, and discussions. Enhance your learning experience and collaborate with peers.</p>
                </div>
            </div>
            <button className={styles.Call} onClick={()=> {
                props.setTabSelected(tabs.home)
            }}>Get Started</button>
        </div>
    )
}

export default Splash;