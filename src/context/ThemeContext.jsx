"use client";

const { createContext, useState } = require("react");

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  // =============>> DARK MODE TOGGLE <<=============
  const [mode, setMode] = useState("dark");
  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

    // ===============>> MOBILE MENU <<===============
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }


  return (
    <ThemeContext.Provider value={{ toggle, mode, isOpen,  toggleDrawer}}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
