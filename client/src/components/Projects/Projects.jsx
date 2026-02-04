import React from 'react';
import './Projects.css';
import projects from './projectsDb';

function Projects() {
    return (
        <section className="studio">
            <div className="studio-container">
                <div className="studio-header">
                    <h2>Selected Works</h2>
                </div>

                <div className="project-list">
                    {projects.map((project) => (
                        <div className="project-item" key={project.id}>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-tech">{project.tech}</div>
                                <p className="project-desc">{project.description}</p>
                            </div>

                            <a
                                href={project.link}
                                className="project-icon-wrapper"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/git.png" alt="GitHub" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
