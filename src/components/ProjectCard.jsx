import React from 'react';

const ProjectCard = ({ image, image2, projectName, description, icons, name, viewCodeLink, viewDemoLink }) => {
    return (
        <section className='container-project'>
            <div className="projects">
                <picture className="img-project">
                    <source loading='lazy' className="img-project" srcSet={image} type="image/webp" />
                    <img loading='lazy' className="img-project" src={image2} alt={`${projectName} screenshot`} />
                </picture>
                <div className="project-details">
                    <h1 className='category'>{projectName}</h1>
                    <div className="icons">
                        {icons.map((icon, index) => (
                            <span className='icon-card' key={index} style={{ textAlign: 'center', backgroundColor: icon.backgroundColor }}>
                                {/* <img loading='lazy' src={icon.icon} alt={`icon-${index}`} style={{ height: '32px' }} /> */}
                                {icon.icon}
                                <p style={{ textAlign: 'center' }}>{icon.name}</p>
                            </span>
                        ))}
                    </div>
                    <p className='project-details-p'>{description}</p>
                    <footer className='footer-project'>
                        <a className="project-button" href={viewCodeLink} target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" /></svg>
                            Code
                        </a>
                        {
                            viewDemoLink && (
                                <a className="project-button" href={viewDemoLink} target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></g></svg>
                                    View
                                </a>
                            )
                        }
                    </footer>
                </div>
            </div>
        </section>
    );
};

export default ProjectCard;
