import PropTypes from 'prop-types';
import '../styles/FeatureItems.css';

function FeatureItems({ icon, title, description }) {
    return (
        <div className="feature-item">
            <img src={icon} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default FeatureItems;

//PropTypes
FeatureItems.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
