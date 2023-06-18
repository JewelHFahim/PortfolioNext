"use client"


import React, { useContext } from 'react';
import styles from "./darkModeToggle.module.css"
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { ThemeContext } from '../../../context/ThemeContext';


const DarkModeToggle = () => {

    const { toggle, mode } = useContext(ThemeContext);

    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}><BsMoonFill /></div>
            <div className={styles.icon}><BsSunFill /></div>
            <div className={styles.ball} style={mode === "light" ? { left: "2px" } : { right: "2px" }}></div>
        </div>
    )
}

export default DarkModeToggle