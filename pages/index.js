// Import React and necessary components/modules
import React, { useState } from 'react';
import Header from '../components/Header';  // Import the Header component
import ContentCard from '../components/ContentCard';  // Import the ContentCard component
import ProjectCard from '../components/ProjectCard';  // Import the ProjectCard component
import styles from '../styles/Home.module.css';  // Import the styles for the Home page

// Define the functional component for the Home page
const Home = () => {
    // Array containing project data
    const allProjects = [
        { title: "Hero", description: "PlaceHolderPlaceHolder", imageUrl: "/ahri.jpg", href: "/about" },
        { title: "Project 2", description: "Weather App", imageUrl: "/ahri.jpg", href: "/weather" },
        { title: "Chat", description: "Instant Message Chat", imageUrl: "/ahri.jpg", href: "page5" },
        { title: "pro4", description: "PlaceHolderPlaceHolder", imageUrl: "/ahri.jpg", href: "/contact" },
        { title: "Proj5", description: "Weather App", imageUrl: "/ahri.jpg", href: "/card1" },
        { title: "FuckItWORKS!!", description: "Instant Message Chat", imageUrl: "/ahri.jpg", href: "about" },
        // more projects as needed
    ];

    // State for tracking the index of the currently displayed set of projects
    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    // Slice the array to get the subset of projects to display
    const projectsToShow = allProjects.slice(currentSetIndex, currentSetIndex + 3);

    // Handler function for the "Next" button click
    const handleNextClick = () => {
        setCurrentSetIndex((prevIndex) => prevIndex + 3);
    };

    // Handler function for the "Prev" button click
    const handlePrevClick = () => {
        setCurrentSetIndex((prevIndex) => Math.max(prevIndex - 3, 0));
    };

    // Return the JSX structure for the Home component
    return (
        <div className={styles.container}>
            {/* Render the Header component */}
            <Header />

            {/* Render the ContentCard component with its styles and properties */}
            <ContentCard className={styles.ContentCard}>
                {/* Content inside ContentCard goes here */}
            </ContentCard>

            {/* Render the project cards and navigation buttons */}
            <div className={styles.cardContainer}>
                {/* Map through the projectsToShow array and render ProjectCard components */}
                {projectsToShow.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        href={project.href}
                    />
                ))}
                {/* Navigation buttons for switching project sets */}
                <div className={styles.navigationButtons}>
                    <button onClick={handlePrevClick} disabled={currentSetIndex === 0}>
                        Prev
                    </button>
                    <button onClick={handleNextClick} disabled={currentSetIndex + 3 >= allProjects.length}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

// Export the Home component as the default export
export default Home;



