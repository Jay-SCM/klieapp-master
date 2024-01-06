// Import React library and motion module from framer-motion library
import React from 'react';
import { motion } from 'framer-motion';
// Import styles from the Home module CSS file
import styles from '../styles/Home.module.css';

// Define the ContentCard functional component that takes 'children' as a prop
const ContentCard = ({ children }) => {
    // Return JSX structure for the ContentCard component
    return (
        // Render a div with the specified CSS class from the Home module
        <div className={styles.ContentCard}>
            {/* Render a paragraph with placeholder text */}
            <p>
                PLACEHOLDER PLACEHOLDER PlaceHolder
            </p>
            {/* Render a paragraph with additional placeholder text and line breaks */}
            <p>
                <br />
                <br />
                PLACEHOLDER PLACEHOLDER placeholderplaceholderplaceholder
                placeholderplaceholderplaceholderplaceholderplaceholderplaceholder
            </p>
            {/* Render a paragraph with more placeholder text and line breaks */}
            <p>
                <br />
                <br />
                PLACEHOLDER PLACEHOLDER    PLACEHOLDER   PLACEHOLDER
            </p>
            {/* Render the children components passed to ContentCard */}
            {children}
            {/* Render an animated image (JavaScript Icon) using framer-motion */}
            <motion.img
                src="/js.png"
                alt="JavaScript Icon"
                className="animatedIcon"
                style={{ width: '40px', height: '40px' }}
                animate={{ x: 50, y: -250, repeat: Infinity, duration: 2 }}
            />
            {/* Render an animated image (TypeScript Icon) using framer-motion */}
            <motion.img
                src="/ts.png"
                alt="TypeScript Icon"
                className="animatedIcon"
                style={{ width: '40px', height: '40px' }}
                animate={{ x: 100, y: -200, repeat: Infinity, duration: 2, delay: 0.5 }}
            />
            {/* Render an animated image (MySQL Icon) using framer-motion */}
            <motion.img
                src="/mysql.png"
                alt="MySQL Icon"
                className="animatedIcon"
                style={{ width: '40px', height: '40px' }}
                animate={{ x: 10, y: -150, repeat: Infinity, duration: 2, delay: 0.5 }}
            />
            {/* Render an animated image (Figma Icon) using framer-motion */}
            <motion.img
                src="/figma.png"
                alt="Figma Icon"
                className="animatedIcon"
                style={{ width: '40px', height: '40px' }}
                animate={{ x: 30, y: -100, repeat: Infinity, duration: 2, delay: 0.5 }}
            />
            {/* Render an animated image (MUI Icon) using framer-motion */}
            <motion.img
                src="/mui.png"
                alt="MUI Icon"
                className="animatedIcon"
                style={{ width: '40px', height: '40px' }}
                animate={{ x: 70, y: -80, repeat: Infinity, duration: 2, delay: 0.5 }}
            />
            {/* Add more animated image elements for other icons */}
        </div>
    );
};

// Export the ContentCard component as the default export
export default ContentCard;







