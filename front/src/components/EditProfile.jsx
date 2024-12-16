import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileUpdate } from '../Store/UserSlice';

function EditProfile({ onCancelEdit }) {
    // Utilisation de useSelector pour récupérer les informations de l'utilisateur + token dans le store Redux
    const {
        firstName: currentFirstName,
        lastName: currentLastName,
        token,
    } = useSelector(state => state.user);

    // Utilisation de useDispatch pour dispatcher l'action de mise à jour du profil
    const dispatch = useDispatch();

    // Utilisation de useState pour gérer les états locaux des champs de saisie
    const [firstName, setFirstName] = useState(currentFirstName || '');
    const [lastName, setLastName] = useState(currentLastName || '');

    const handleChangeFirstname = event => {
        setFirstName(event.target.value);
    };

    const handleChangeLastname = event => {
        setLastName(event.target.value);
    };

    const handleSave = () => {
        // Dispatcher l'action de mise à jour du profil
        dispatch(profileUpdate({ firstName, lastName, token }));
        console.log('Prénom :', firstName);
        console.log('Nom de famille :', lastName);
        // Appeler onCancelEdit pour fermer le formulaire de modification
        onCancelEdit();
    };

    const handleCancel = () => {
        // Réinitialiser les champs avec les valeurs actuelles
        setFirstName(currentFirstName || '');
        setLastName(currentLastName || '');
        // Appeler onCancelEdit pour fermer le formulaire de modification
        onCancelEdit();
    };

    return (
        <div className="edit-form">
            <div className="input-content">
                <input
                    type="text"
                    onChange={handleChangeFirstname}
                    value={firstName}
                    placeholder="Prénom"
                    className="input"
                />
                <div className="save-button-right">
                    <button onClick={handleSave} className="save-button">
                        <span className="button-content">Save</span>
                    </button>
                </div>
            </div>
            <div className="input-content">
                <input
                    type="text"
                    onChange={handleChangeLastname}
                    value={lastName}
                    placeholder="Nom de famille"
                    className="input"
                />
                <button onClick={handleCancel} className="cancel-button">
                    <span> Cancel</span>
                </button>
            </div>
        </div>
    );
}

export default EditProfile;

EditProfile.propTypes = {
    onCancelEdit: PropTypes.func.isRequired,
    // Cela garantit que la fonction onCancelEdit est fournie et peut être appelée pour fermer le formulaire de modification
};
