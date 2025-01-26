import { CardProfile } from '../components/CardProfile'

const HeaderComponent = ({ pictureCV, pictureCV2, children }) => {
    return (
        <header>
            <div>
                <CardProfile pictureCV={pictureCV} pictureCV2={pictureCV2} />
            </div>

            <div className="socials">
                <h2>Socials</h2>
                <div className="container_social_card">
                    {children}
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;
