import Button from "@/component/Button/Button";
import styles from "./page.module.css";
import Image from "next/image";
import Hero from "public/assets/hero.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products
        </h1>

        <p className={styles.desc}>
          Turing your Idea into Reality. We bring together global tech Industry
        </p>

        <Link href="/projects">
          <div className="w-full flex justify-center lg:justify-start">
            <button className={styles.projectBtn}>Explore Projects</button>
          </div>
        </Link>
      </div>

      <div className={styles.item}>
        <Image src={Hero} alt="animated img" className={styles.img} />
      </div>
    </div>
  );
}
