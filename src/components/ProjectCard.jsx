import React from 'react';

const ProjectCard = ({ image, image2, projectName, description, icons, name, viewCodeLink }) => {
    return (
        <section className='container-project'>
            <div className="projects">
                <picture className="img-project">
                    <source className="img-project" srcSet={image} type="image/webp" />
                    <img loading='lazy' className="img-project" src={image2} alt={`${projectName} screenshot`} />
                </picture>
                <div className="project-details">
                    <h1 className='category'>{projectName}</h1>
                    <p>{description}</p>
                    <div className="icons">
                        {icons.map((icon, index) => (
                            <div key={index} style={{ textAlign: 'center' }}>
                                <img loading='lazy' src={icon.icon} alt={`icon-${index}`} style={{ height: '32px' }} />
                                <p style={{ textAlign: 'center' }}>{icon.name}</p>
                            </div>
                        ))}
                    </div>
                    <a className="project-button" href={viewCodeLink} target="_blank" rel="noreferrer">
                        View Code
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectCard;
