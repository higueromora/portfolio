export const CardProfile = ({ pictureCV, pictureCV2 }) => {
    return (
        <div className="card">
            <div className="card__content">
                <h1 className="name">Ángel HM</h1>
                <div style={{ width: '100%', height: '253px' }}>
                    <picture className="picture-container">
                        <source srcSet={pictureCV} alt="profile" style={{ width: '100%', borderRadius: '50%' }} type="image/webp" />
                        <img loading='eager' src={pictureCV2} alt="profile" style={{ width: '100%', borderRadius: '50%' }} />
                    </picture>
                </div>
                <p className="category">Web developer</p>
                <p className="about">
                    Apasionado por el desarrollo de software. Centrado en encontrar la combinación perfecta entre eficiencia técnica y experiencia del usuario
                </p>
            </div>
        </div>
    );
}
