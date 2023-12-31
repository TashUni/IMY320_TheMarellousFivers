import styles from './Module.module.scss';
import a from '../../App.module.scss';
import colors from "../colors";
import React from "react";

function Module({announcements, nextDeadlines, module, index, expandModule}) {

    const translateIndex = (index) => {
        switch (index) {
            case 0:
                return "One"
            case 1:
                return "Two"
            case 2:
                return "Three"
            case 3:
                return "Four"
            return "Invalid";
        }
    }

    return(
        <div className={[styles.Container, styles[translateIndex(index % 4)],  `fade-in-and-move delay${index + 1}` ].join(' ')}
             style={{
                 borderLeft: `10px solid`,
                 borderColor: colors[module].normal,
                 backgroundColor: `${colors[module].pale}`
             }}

             onClick={() => {
                 expandModule(module, colors[module].pale, colors[module].normal);
             }}
        >
            <p className={styles.Title}>{module}</p>

            {!announcements.length == 0 &&
                <React.Fragment>
                    <p>Latest Announcements: </p>
                    <ul>
                        {
                            announcements.slice(0, 2).map((el) => {
                                return <li>{el.heading}</li>
                            })
                        }
                    </ul>
                </React.Fragment>
            }

            {!nextDeadlines.length == 0 &&
                <React.Fragment>
                    <p>Next Deadlines: </p>
                    <ul>
                        {
                            nextDeadlines.slice(0, 2).map((el) => {
                                return <li>{el}</li>
                            })
                        }
                    </ul>
                </React.Fragment>
            }

        </div>
    )
}

export default Module;