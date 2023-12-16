import React from "react";
import styels from "./page.module.css";
import Image from "next/image";
import Button from "@/component/Button/Button";
import Utilities from "@/utils/ArrowTag";

export const metadata = {
  title: "About",
  description: "From About Page",
};

const About = () => {
  return (
    <div className="about">
      <section className={styels.container}>

        <div className={styels.textContainer}>

          <div className={styels.item}>
            <p className={styels.title}>About Me</p>
            <p className={styels.desc}>
              Hello! I&apos;m Jewel, and I find joy in crafting digital
              experiences on the internet. I&apos;m a Frontend Developer based
              in Bangladesh. My true passion lies in designing captivating UI
              effects, animations, and building intuitive, dynamic user
              interfaces.
              <br /> <br />
              I&apos;m an organized problem solver and an independent worker
              with meticulous attention to detail. Whenever I have the
              opportunity, I love exploring new places through travel.
              <br /> <br />
              <span className={styels.collaborate}>
                Let&apos;s collaborate and create something extraordinary!
              </span>
              <br />
              I&apos;m deeply interested in the entire frontend spectrum and
              thrive on working with like-minded individuals on ambitious
              projects.
              <br /> <br /> Here are a few of the technologies I&apos;ve been
              actively working with:
            </p>
          </div>
          
        </div>

        <div className={styels.imgConatainer}>
          <Image
            src="/assets/jewel.jpg"
            alt=""
            fill={true}
            className={styels.img}
          />
          <div className={styels.imgText}>
            <h1 className={styels.imgTitle}>Jewel Hossain Fahim</h1>
            <h2 className={styels.imgDesc}>Fronend Developer</h2>
          </div>
        </div>

      </section>

      <section>
        <div className={styels.technology}>
          <p>Frontend</p>
        </div>

        <div className={styels.techItems}>
          <Utilities>HTML</Utilities>
          <Utilities>CSS</Utilities>
          <Utilities>JavaScript (ES6+)</Utilities>
          <Utilities>React.js</Utilities>
          <Utilities>React Router</Utilities>
          <Utilities>REST APIs</Utilities>
          <Utilities>Redux</Utilities>
          <Utilities>Next Js</Utilities>
          <Utilities>Bootstrap</Utilities>
          <Utilities>Tailwind</Utilities>
          <Utilities>Material UI</Utilities>
          <Utilities>TypeScript</Utilities>
        </div>

        {/* Backend */}
        <div className={styels.technology}>
          <p>Backend</p>
        </div>

        <div className={styels.techItems}>
          <Utilities>Node.js</Utilities>
          <Utilities>MongoDB</Utilities>
          <Utilities>Express.js</Utilities>
          <Utilities>Firebase</Utilities>
        </div>

        {/* Tools */}

        <div className={styels.technology}>
          <p>Tool&apos;s</p>
        </div>

        <div className={styels.techItems}>
          <Utilities>Chrome Dev Tools</Utilities>
          <Utilities>Redux Dev Tools</Utilities>
          <Utilities>GitHub</Utilities>
          <Utilities>Netlify</Utilities>
          <Utilities>Visual Studio Code</Utilities>
          <Utilities>React Testing Library</Utilities>
          <Utilities>Figma</Utilities>
          <Utilities>Vercel</Utilities>
          <Utilities>WordpressElementor</Utilities>
        </div>
      </section>
    </div>
  );
};

export default About;
