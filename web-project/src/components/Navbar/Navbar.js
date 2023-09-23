import s from './navbar.module.scss'
import {Fragment} from "react";

function Navbar() {
    return(
        <Fragment>
            <div className={s.Navbar}>
                <img alt={"website logo"} src={"assets/images/logo.svg"} className={s.img}/>
                <ul className={s.ul}>
                    <li>home</li>
                    <li>modules</li>
                    <li>profile</li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Navbar;