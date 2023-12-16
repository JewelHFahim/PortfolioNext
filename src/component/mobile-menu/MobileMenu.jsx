"use client"
import { ThemeContext } from '@/context/ThemeContext'
import { useContext, useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import styles from "./MobileMenu.module.css"


const MobileMenu = () => {

    const {isOpen, toggleDrawer} = useContext(ThemeContext)

    return (
        <>


            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                size={250}
            >
                <div className={styles.container}>
                    
                    <h1>Jewel Hossain <span>Fahim</span></h1>


                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>

                    
                    </div>
            </Drawer>
        </>
    )
}

export default MobileMenu