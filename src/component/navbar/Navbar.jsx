"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Navbar = () => {
  
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    // {
    //   id: 2,
    //   title: "Portfolio",
    //   url: "/portfolio",
    // },
    {
      id: 3,
      title: "Projects",
      url: "/projects"
    },
    {
      id: 4,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 5,
      title: "About",
      url: "/about",
    },
    {
      id: 6,
      title: "Contact",
      url: "/contact",
    },
  ];

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Jewel Hossain <span className={styles.fahim}>Fahim</span>
      </Link>

      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.menus}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout}
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
