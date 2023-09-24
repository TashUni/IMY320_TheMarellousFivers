import s from './profile.module.scss';

import photo from './profile.png';

function Profile() {
    return (
        <div className={s.Container}>
            <img alt="profile" className={s.img} src={photo} />
            <h2>Human Person</h2>
            <p className={s.p}>Registration Status</p>
            <p className={s.para}>OKAY</p>
        </div>
    )
}

export default Profile;