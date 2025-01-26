
const ExperienceDetails = ({ role, company, period, description, description2, description3 }) => {
    return (
        <div className="experience-details">
            <h3 className="category">{role} | {company}</h3>
            <h3 className="category">{period}</h3>
            <p className="separado">{description}</p>
            <p className="separado">{description2}</p>
            <p className="separado">{description3}</p>
        </div>
    );
};

export default ExperienceDetails;
