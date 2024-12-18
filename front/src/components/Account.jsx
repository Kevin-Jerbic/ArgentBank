import PropTypes from 'prop-types';
import '../styles/Account.css';

function Account({ title, amount, description, button }) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">{button}</button>
            </div>
        </section>
    );
}

export default Account;

//PropTypes
Account.propTypes = {
    title: PropTypes.string,
    amount: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.string,
};
