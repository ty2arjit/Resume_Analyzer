import React from "react";
import { motion } from "framer-motion";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.hero}>
        <h1>
          Welcome to <span>Smart Resume Analyzer</span>
        </h1>
        <p>
          Analyze your resume using AI instantly. Get personalized feedback,
          improvement tips, and tracking history—all in one place.
        </p>
        <a href="/profile" className={styles.cta}>
          Analyze Now
        </a>
      </div>
    </motion.div>
  );
};

export default Home;
