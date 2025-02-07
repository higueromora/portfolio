

export const SocialCard = ({ icon, href, Title }) => {
    return (
        <div className="social-card">
            <a href={href} target="_blank" rel="noreferrer">
                {icon}
                {Title}
            </a>
            {/* <p style={{ textAlign: 'center' }} >{Title} </p> */}
        </div>
    )
}
