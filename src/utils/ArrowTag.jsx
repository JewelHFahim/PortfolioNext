import React from "react";
import { BiRightArrow } from "react-icons/bi";
import styles from "./arrowTag.module.css"

const Utilities = ({ children }) => {
  return (
    <div>
      <p className="flex items-center">
        <span className="text-secondary flex items-center">
          <BiRightArrow className={styles.arrow} />
        </span>
        {children}
      </p>
    </div>
  );
};

export default Utilities;
