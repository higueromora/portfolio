import ExperienceDetails from './ExperienceDetails';

const Experience = ({ title, experiences }) => {
    return (
        <section className="experience">
            <h1 className="Title">{title}</h1>

            {experiences.map((exp, index) => (
                <ExperienceDetails
                    key={index}
                    role={exp.role}
                    company={exp.company}
                    period={exp.period}
                    description={exp.description}
                    description2={exp.description2}
                    description3={exp.description3}
                />
            ))}
        </section>
    );
};

export default Experience;
