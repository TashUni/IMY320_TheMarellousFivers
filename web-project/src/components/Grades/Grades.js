import s from './grades.module.scss';
import a from '../../App.module.scss';
import React from "react";

function Grades(props) {
    return (
        <div className={"fade-in-and-move"}>
            <div className={s.Container}>
                <div>
                <h2 className={s.h2}>Recent Grades</h2>
                <div>

                    {
                        props.grades.map((el) => {

                            return (
                                <React.Fragment>

                                <div><b>{el.subject}</b></div>

                                <div>

                                    {
                                        el.assignments.map((a) => {
                                            return a.grade != null ?
                                            (<div className={s.Grade}>
                                                <div className={s.GradePara}>{a.name}</div>
                                                <div className={a.grade < 60 ? s.Yellow : s.Green}>{a.grade}</div>
                                            </div>) : null
                                        })
                                    }


                                </div>

                                <hr className={s.hr}/>

                                </React.Fragment>
                            )
                        })
                    }


                </div>
                </div>
                <div>
                    <button className={s.button} onClick={props.seeAllGrades}>See All Grades</button>
                </div>
            </div>
        </div>
    )
}

export default Grades;