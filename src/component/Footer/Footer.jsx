import React from 'react';
import styles from "./footer.module.css";
import Image from 'next/image';


const Footer = () => {

    return (
        <div className={styles.container}>
            <div>@ FireCutter. All rights reserved.</div>

            <div className={styles.social}>
                <Image src="/Assets/1.png" width={15} height={15} className={styles.icon} alt='vsb'/>
                <Image src="/Assets/2.png" width={15} height={15} className={styles.icon} alt='vsb'/>
                <Image src="/Assets/3.png" width={15} height={15} className={styles.icon} alt='vsb'/>
                <Image src="/Assets/4.png" width={15} height={15} className={styles.icon} alt='vsb'/>
            </div>

        </div>
    )
}

export default Footer