// components/Navbar.js
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            {/* Logo with link to home page */}
            <Link href="/">
                <div className={styles.logo}>
                    <img src="/prof2.jpg" alt="Your Logo" style={{ maxWidth: '50px', maxHeight: '50px', borderRadius: '50%' }} />
                </div>
            </Link>

            <ul className={styles.navList}>
                {/* External links */}
                <li className={styles.navItem}>
                    <a href="https://github.com/Jay-SCM" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
                <li className={styles.navItem}>
                    <a href="https://us.battle.net/" target="_blank" rel="noopener noreferrer">Battle.net</a>
                </li>
                <li className={styles.navItem}>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a>
                </li>
                <li className={styles.navItem}>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;







