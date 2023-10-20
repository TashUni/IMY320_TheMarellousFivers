import s from './AboutUs.module.scss';

import {React, Fragment} from "react";

import mat from './images/matt.jpg';
import tash from './images/tash.jpg';
import tom from './images/tom.jpg';
import mon from './images/monica.jpg';
import mark from './images/mark.jpg';

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
                    Matt is a Figma designer who enjoys creating designs that are easy to use and pleasing to the eye
                    </div>
                </div>
            </div>

            <div className={`${s.person_card} fade-in-and-move delay2`} id="tash">

                <div className={s.text_group}>
                    <div className={s.name}>Latasha Friend</div>
                    <div className={s.about}>
                    Latasha is an amazing project manager who can handle any challenge with grace and efficiency. She is a problem-solver who always delivers high-quality results on time.
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
                    <div className={s.name}>Reniloe Brancon</div>
                    <div className={s.about}>
                    Monica is an excellent organizer and people manager who can handle any project with ease. She is a natural leader who inspires and motivates others to achieve their goals.
                    </div>
                </div>
            </div>

            <div className={`${s.person_card} fade-in-and-move delay4`} id="mark">

                <div className={s.text_group}>
                    <div className={s.name}>Mark Grosvenor</div>
                    <div className={s.about}>
                    Mark is a talented video editor and copywriter who can turn any idea into a captivating story. He has a keen eye for details and a flair for words.
                    </div>
                </div>
                <img
                    className={s.img}
                    src={mark}
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
                    Tom is a passionate coder who loves to create amazing apps and websites. He is always learning new skills and technologies to improve his craft.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;