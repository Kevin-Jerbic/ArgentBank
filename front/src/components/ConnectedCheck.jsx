import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { profileUser } from '../Store/UserSlice.js';

function ConnectedCheck() {
    const dispatch = useDispatch();
    const { loading, token } = useSelector(state => state.user);
    // verifie si il y a toujours le token dans local storage c'est que je suis connecté sinon retour à la page d'accueil
    useEffect(() => {
        const localStoragToken = localStorage.getItem('token');
        // recuperer profil avec token dans localStorage
        dispatch(profileUser(localStoragToken));
    }, [dispatch, token]);

    if (loading) {
        return <div>Loading</div>;
    } else {
        //si error retourne
        return token ? <Outlet /> : <Navigate to="/" />;
    }
}

export default ConnectedCheck;

/*
Ce composant sert à vérifier si user est connecté en vérifiant la présence d'un token dans le local storage.
Si le token est là, on récupère le profil de user avec le token.
Si user est connecté, on affiche le composant enfant.
Sinon on redirige user vers la page d'accueil.
*/
