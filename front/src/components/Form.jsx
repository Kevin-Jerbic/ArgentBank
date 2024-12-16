import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Store/UserSlice.js';
import '../styles/Form.css';

function Formulaire() {
    // Utilissation de useSelector pour récupérer les informations de user dans le store Redux
    const { loading, error, token } = useSelector(state => state.user);

    const [username, setUsername] = useState('');
    const [userpassword, setUserpassword] = useState('');

    // Utilisation de useDispatch pour obtenir la fonction de dispatch Redux
    const dispatch = useDispatch();
    // Utilisation de useNavigate pour obtenir la fonction de navigation
    const navigate = useNavigate();

    // Enregistrement du token dans le localStorage
    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
            navigate('/user');
        }
    }, [token, navigate, dispatch]);

    const handleChangeName = event => {
        setUsername(event.target.value);
    };

    const handleChangePassword = event => {
        setUserpassword(event.target.value);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            //création nouvel objet avec mail et mot de passe utilisateur
            const userCredentials = {
                email: username,
                password: userpassword,
            };
            // Envoyer la requête de connexion et attendre les données utilisateur
            dispatch(loginUser(userCredentials));
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={'input-wrapper'}>
                <label htmlFor="username">Username</label>
                <input
                    type="email"
                    id="username"
                    value={username}
                    onChange={handleChangeName}
                />
            </div>
            <div className={'input-wrapper'}>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={userpassword}
                    onChange={handleChangePassword}
                />
            </div>
            <div className={'input-remember'}>
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className={'sign-in-button'} type="submit">
                {loading ? 'Loading...' : 'Login'}
            </button>
            {error && console.log('error', error)}
            {/* {error === 'Rejected' && (
                <div className="text-red-500">
                    Mot de passe ou email incorrect.
                </div>
            )} */}
        </form>
    );
}

export default Formulaire;
