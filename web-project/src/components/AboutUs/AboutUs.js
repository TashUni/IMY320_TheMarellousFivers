import s from './AboutUs.module.scss';

import {React, Fragment} from "react";

import mat from './images/matt.jpg';
import tash from './images/tash.jpg';
import tom from './images/tom.jpg';
import mon from './images/monica.jpg';

import Navbar from "../Navbar/Navbar";
import styles from "../../App.module.scss";

function AboutUs() {
    return (
        <div className={s.person_card_list}>

            <div className={`${s.person_card} fade-in-and-move delay1`} id="matt">
                <img
                    className={s.img}

                    src={mat}
                    alt="Picture of person from shoulders up"
                />
                <div className={s.text_group}>
                    <div className={s.name}>Matthew Verster</div>
                    <div className={s.about}>
                        About the person, wow they are so good and they do so much for the
                        planet as a whole. Incredible.
                    </div>
                </div>
            </div>

            <div className={`${s.person_card} fade-in-and-move delay2`} id="tash">

                <div className={s.text_group}>
                    <div className={s.name}>Latasha Friend</div>
                    <div className={s.about}>
                        About the person, wow they are so good and they do so much for the
                        planet as a whole. Incredible.
                    </div>
                </div>
                <img
                    className={s.img}
                    src={tash}
                    alt="Picture of person from shoulders up"
                />
            </div>

            <div className={`${s.person_card} fade-in-and-move delay3`} id="monica">
                <img
                    className={s.img}
                    src={mon}
                    alt="Picture of person from shoulders up"
                />
                <div className={s.text_group}>
                    <div className={s.name}>Reniloe</div>
                    <div className={s.about}>
                        About the person, wow they are so good and they do so much for the
                        planet as a whole. Incredible.
                    </div>
                </div>
            </div>

            <div className={`${s.person_card} fade-in-and-move delay4`} id="mark">

                <div className={s.text_group}>
                    <div className={s.name}>Mark Grosvenor</div>
                    <div className={s.about}>
                        About the person, wow they are so good and they do so much for the
                        planet as a whole. Incredible.
                    </div>
                </div>
                <img
                    className={s.img}
                    src="./images/test.jpg"
                    alt="Picture of person from shoulders up"
                />
            </div>

            <div className={`${s.person_card} fade-in-and-move delay4`} id="tom">
                <img
                    className={s.img}
                    src={tom}
                    alt="Picture of person from shoulders up"
                />
                <div className={s.text_group}>
                    <div className={s.name}>Thomas Isebeck</div>
                    <div className={s.about}>
                        About the person, wow they are so good and they do so much for the
                        planet as a whole. Incredible.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;