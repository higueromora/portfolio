

export const SocialCard = ({ src, href, alt, Title }) => {
    return (
        <div className="social_card">
            <a href={href} target="_blank" rel="noreferrer">
                <img src={src} alt={alt} />
            </a>
            <p style={{ textAlign: 'center' }} >{Title} </p>
        </div>
    )
}
