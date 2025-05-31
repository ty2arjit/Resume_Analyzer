import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "./Resume_Analyzer_logo_3.png";

function Navbar() {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(id);
  };

  const NavItems = [
    { id: 1, name: "Home", href: "#" },
    { id: 2, name: "Contact Us", href: "#" },
    { id: 3, name: "Help", href: "#" },
  ];

  return (
    <nav className={styles.bar}>
      <div className={styles.leftSection}>
        <img src={logo} alt="Resume Logo" className={styles.logo} />
        <ul className={styles.navList}>
          {NavItems.map((item) => (
            <li
              key={item.id}
              className={`${styles.navItem} ${activeId === item.id ? styles.active : ""}`}
              onClick={() => handleClick(item.id)}
            >
              <a href={item.href} className={styles.link}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.rightSection}>
        <ul className={styles.navList}>
          <li
            className={`${styles.navItem} ${activeId === 4 ? styles.active : ""}`}
            onClick={() => handleClick(4)}
          >
            <a href="#" className={styles.link}>
              Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
