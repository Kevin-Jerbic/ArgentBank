import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearUserData } from '../Store/UserSlice';
import '../styles/Header.css';

function Header({ image }) {
    // Utilisez useSelector pour obtenir les informations de l'utilisateur + token dans le store Redux
    const { firstName, token } = useSelector(state => state.user);

    // Utilisez useDispatch pour obtenir la fonction de dispatch Redux
    const dispatch = useDispatch();
    // Utilisez useNavigate pour obtenir la fonction de navigation
    const navigate = useNavigate();

    // Fonction pour gérer la déconnexion
    const handleLogout = () => {
        dispatch(clearUserData());
        localStorage.clear();
        navigate('/');
    };
    return (
        <div className="main-nav">
            <Link to="/">
                <img
                    className="main-nav-logo"
                    alt="Argent Bank Logo"
                    src={image}
                ></img>
            </Link>

            {token ? (
                <div className="main-nav-link">
                    <div className="main-nav-item">
                        <Link to="/user">
                            <i className="fa fa-user-circle"></i>
                            <div>{firstName}</div>
                        </Link>
                    </div>
                    <button className="main-nav-item" onClick={handleLogout}>
                        <i className="fa fa-sign-out"></i>
                        <div>Sign Out</div>
                    </button>
                </div>
            ) : (
                <Link to="/login" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    <p>Sign In</p>
                </Link>
            )}
        </div>
    );
}

Header.propTypes = {
    image: PropTypes.string,
};

export default Header;
