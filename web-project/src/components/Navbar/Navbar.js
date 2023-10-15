import s from './navbar.module.scss'
import {Fragment} from "react";
import {tabs} from '../../App';

import logo from './logo.svg';

function Navbar({setTabSelected}) {

    return(
        <Fragment>
            <div className={s.Navbar}>
                <img alt={"website logo"} src={logo} className={s.img}/>
                <ul className={s.ul}>
                    <li className={s.li} onClick={() => setTabSelected(tabs.home)}>home</li>
                    <li className={s.li}  onClick={() => setTabSelected(tabs.modules)}>modules</li>
                    <li className={s.li}  onClick={() => setTabSelected(tabs.profile)}>profile</li>
                    <li className={s.li}  onClick={() => setTabSelected(tabs.about)}>about</li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Navbar;