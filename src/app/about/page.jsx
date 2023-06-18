import React from 'react';
import styels from "./page.module.css";
import Image from 'next/image';
import Button from '@/component/Button/Button';

const About = () => {
    return (
        <div className={styels.container}>
            <div className={styels.imgConatainer}>
                <Image src="/assets/about.jpeg" alt='' fill={true} className={styels.img} />
                <div className={styels.imgText}>
                    <h1 className={styels.imgTitle}>Digital Storytelleres</h1>
                    <h2 className={styels.imgDesc}>Handcrafting award wining digital expert</h2>
                </div>
            </div>
            <div className={styels.textContainer}>
                <div className={styels.item}>
                    <h1 className={styels.title}>Who Are We?</h1>
                    <p className={styels.desc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quaerat iste in incidunt, illum laboriosam autem, explicabo, iusto nesciunt amet saepe temporibus repudiandae modi natus?
                        <br /> <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quaerat iste in incidunt, illum laboriosam autem, explicabo, iusto nesciunt amet saepe temporibus repudiandae modi natus?
                    </p>
                </div>

                <div className={styels.item}>
                    <h1 className={styels.title}>What  We Do?</h1>
                    <p className={styels.desc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quaerat iste in incidunt, illum laboriosam autem, explicabo, iusto nesciunt amet saepe temporibus repudiandae modi natus?
                        <br /> <br />
                        -Dynamic Websites
                        <br />
                        -Fast and Handy Mobilee
                        <br />
                        -Creative Illustration
                    </p>
                    <Button url="/contact" text="Contact" />
                </div>
            </div>
        </div>
    )
}

export default About