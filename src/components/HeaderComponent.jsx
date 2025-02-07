import { CardProfile } from '../components/CardProfile'

const HeaderComponent = ({ pictureCV, pictureCV2 }) => {
    return (
        <header>
            <div>
                <CardProfile pictureCV={pictureCV} pictureCV2={pictureCV2} />
            </div>
        </header>
    );
};

export default HeaderComponent;
