import s from "./allGrades.module.scss";
import React from "react";

function AllGrades(props) {
    return (
        //className={`${style.Container} fade-in-and-move delay1`}
        <div className={`${s.Container} fade-in-and-move delay2`}>
            <h2 className={s.h2}>All Grades</h2>
            <div className={s.GradesContainer}>

                {
                    props.grades.map((el) => {

                        return (
                            <React.Fragment>

                                <div><b>{el.subject}</b></div>

                                <div>

                                    {
                                        el.assignments.map((a) => {
                                            return (<div className={s.Grade}>
                                                <div>{a.name}</div>
                                                {
                                                    a.grade != null &&
                                                    <div className={a.grade < 60 ? s.Yellow : s.Green}>{a.grade}</div>
                                                }

                                                {
                                                    a.grade == null &&
                                                    <div className={s.Submitted}>Submitted</div>
                                                }
                                                <div className={s.Date}>{a.date}</div>
                                            </div>)

                                        })
                                    }


                                </div>

                                <hr/>

                            </React.Fragment>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default AllGrades;