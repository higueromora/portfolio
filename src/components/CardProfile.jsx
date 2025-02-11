export const CardProfile = ({ pictureCV, pictureCV2 }) => {
    return (
        <div className="card">
            <h1 className="name">Ángel HM</h1>
            <div style={{ height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <picture className="picture-container">
                    <source loading='eager' srcSet={pictureCV} alt="profile" style={{ width: '172px', height: '150px', borderRadius: '50%' }} type="image/webp" />
                    <img loading='eager' src={pictureCV2} alt="profile" style={{ width: '172px', height: '150px', borderRadius: '50%' }} />
                </picture>
            </div>
            <h2 className="category">Web developer</h2>
            <p className="about">Centrado en encontrar la combinación perfecta entre eficiencia técnica y experiencia del usuario
            </p>
        </div>
    );
}
