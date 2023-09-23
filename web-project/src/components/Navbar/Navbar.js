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
                    <li onClick={() => setTabSelected(tabs.home)}>home</li>
                    <li onClick={() => setTabSelected(tabs.modules)}>modules</li>
                    <li onClick={() => setTabSelected(tabs.profile)}>profile</li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Navbar;