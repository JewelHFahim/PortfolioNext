import styles from "./projects.module.css";
import Link from "next/link";

export const metadata = {
  title: "Projects",
  description: "From Projects Page",
};

const Projects = () => {
  
  return (
    <div className={styles.container}>

      <h1 className={styles.mainTitle}>Projects</h1>

      {/* Frontend Projects */}
      <h1 className={styles.selectTitle}>- Frontend</h1>

      <div className={styles.items}>
        <Link href="https://spagreen.netlify.app/" className={styles.item}>
          <span className={styles.title}>SpaGreen</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/applications" className={styles.item}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>

    </div>
  );
};

export default Projects;
