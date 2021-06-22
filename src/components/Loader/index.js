import React from 'react';

import styles from './index.module.css';

const Loader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
            </div>
        </div>
    );
}

export default Loader
