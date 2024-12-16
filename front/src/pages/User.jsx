import { useState } from 'react';
import { useSelector } from 'react-redux';
import Account from '../components/Account.jsx';
import EditProfile from '../components/EditProfile.jsx';

function User() {
    // Utiliser useSelector pour récupérer les données de user dans le store Redux
    const { firstName, lastName } = useSelector(state => state.user);
    // Créer un état local pour gérer l'affichage du composant EditProfile
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(!isEditing); // Toggle l'état isEditing
    };

    // Fonction pour gérer l'annulation de la modification
    const handleCancelEdit = () => {
        setIsEditing(false); // Passer isEditing à false pour réafficher le bouton "Edit Name"
    };

    return (
        <div>
            <div className="bg-darks">
                <div>
                    <h1 className="text-white">Welcome back</h1>
                </div>
                {isEditing ? (
                    <EditProfile onCancelEdit={handleCancelEdit} />
                ) : (
                    <div>
                        <p className="text-white">
                            {firstName} {lastName}
                        </p>
                        <div className="div-edit-button">
                            <button
                                onClick={handleEditClick}
                                className="edit-button"
                            >
                                Edit Name
                            </button>
                        </div>
                    </div>
                )}
                <Account
                    title="Argent Bank Checking (x8349)"
                    amount="$2,082.79"
                    description="Available Balance"
                    button="View transactions"
                />
                <Account
                    title="Argent Bank Savings (x6712)"
                    amount="$10,928.42"
                    description="Available Balance"
                    button="View transactions"
                />
                <Account
                    title="Argent Bank Credit Card (x8349)"
                    amount="$184.30"
                    description="Current Balance"
                    button="View transactions"
                />
            </div>
        </div>
    );
}

export default User;
