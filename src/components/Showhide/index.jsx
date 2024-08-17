import React, { useState } from 'react';
import styles from "./Showhide.module.scss";

function Showhide() {
    const [boxStatus, setBoxStatus] = useState({ displayStatusOne: 'showElement', displayStatusTwo: 'showElement' });
    const handleFirstName = () => {
        setBoxStatus(boxStatus.displayStatusOne === 'showElement'? {...boxStatus,displayStatusOne:'hideElement'}:{...boxStatus,displayStatusOne:'showElement'})
    }
    const handleLastName = () => {
        setBoxStatus(boxStatus.displayStatusTwo === 'showElement'? {...boxStatus,displayStatusTwo:'hideElement'}:{...boxStatus,displayStatusTwo:'showElement'})
    }

    return (
        <div className={styles.appBg}>
            <div className={styles.appContent}>
                <h1>Show/Hide</h1>
                <div className={styles.showHideContent}>
                    <div className={styles.nameContainer}>
                        <button onClick={handleFirstName}>Show/Hide Firstname</button>
                        <div className={`${styles['nameHolder']} ${styles[boxStatus.displayStatusOne]}`}>
                            venkat
                        </div>
                    </div>
                    <div className={styles.nameContainer}>
                        <button onClick={handleLastName}>Show/Hide Lastname</button>
                        <div className={`${styles['nameHolder']} ${styles[boxStatus.displayStatusTwo]}`}>
                            yashwanth
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showhide