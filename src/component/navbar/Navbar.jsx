"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../../../public/assets/logo.png"
import Image from "next/image";

const Navbar = () => {
  const { toggleDrawer, isOpen } = useContext(ThemeContext);

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },

    {
      id: 3,
      title: "Projects",
      url: "/projects",
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

        {/* Jewel Hossain <span className={styles.fahim}>Fahim</span> */}

        <Image src={logo} alt=""></Image>


      </Link>

      <Link href="/" className={styles.logo2}>
        JH<span className={styles.fahim}>F</span>
      </Link>

      <div className={styles.mobileMenuBtn}>
        <button onClick={toggleDrawer}>
          {isOpen ? (
            <IoCloseSharp  className="text-white text-xl"/>
          ) : (
            <GiHamburgerMenu className="text-white text-xl" />
          )}
        </button>
      </div>

      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.menus}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout}>Resume</button>
      </div>
    </div>
  );
};

export default Navbar;
