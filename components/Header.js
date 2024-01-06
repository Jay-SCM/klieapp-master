// components/Header.js
import React from 'react';
import styles from '../styles/Header.module.css'; // Create a separate CSS module for styling

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.card}>
        <img src="/HeaderImg.jpg" alt="Header" className={styles.cardImage} />
        <div className={styles.cardText}>
          <h2>PLACEHOLDER PLACE HOLDER PLACEHOLDER</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
