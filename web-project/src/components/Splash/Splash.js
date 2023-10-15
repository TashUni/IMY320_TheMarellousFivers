import s from './Splash.module.scss';

function Splash() {
    return (
        <div className={s.splashContainer}>
            <h1 className={s.h1}>Welcome to My Website</h1>
            <p className={s.p}>Explore the amazing world of knowledge and creativity.</p>
        </div>
    )
}

export default Splash;