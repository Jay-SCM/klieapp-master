// components/Header.js
import React from 'react';
import styles from '../styles/Header.module.css';
import TextCard from './TextCard'; // Import the TextCard component

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.card}>
        <TextCard /> {/* Render the TextCard component */}
      </div>
    </header>
  );
};

export default Header;
