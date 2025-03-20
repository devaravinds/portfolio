import '../styles/Content.css';
import { ProjectsData } from '../constants/ProjectsData';

const Projects = () => {
    return (
        <section id="projects-section">
            <div className='content-container'>
                <h1 className="content-title">projects.</h1>
                {ProjectsData.map((project, index) => (
                    <div key={index} className="project-item">
                        <h2 className="content-sub-title">
                            <a 
                                href={project.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="content-sub-title"
                            >
                                {project.title}
                            </a>
                        </h2>
                        <p className="content-text">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
