import axios from 'axios';

export async function login(email, password) {
    try {
        const response = await axios.post(
            `http://localhost:3001/api/v1/user/login`,
            {
                email: email,
                password: password,
            }
        );
        console.log('Response.data.body Login:', response.data.body);

        return response.data.body;
    } catch (error) {
        // Gestion des erreurs
        if (error.response) {
            // Erreur de réponse HTTP (statut non-200)
            console.error('Erreur de réponse HTTP:', error.response.status);
        } else if (error.request) {
            // Erreur de requête (pas de réponse reçue)
            console.error('Erreur de requête:', error.request);
        } else {
            // Erreur pendant la requête (autre erreur)
            console.error('Erreur pendant la requête:', error.message);
        }
        throw error;
    }
}

export async function profile(token) {
    try {
        const response = await axios.post(
            `http://localhost:3001/api/v1/user/profile`,
            {}, // Pas de corps de requête nécessaire
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            }
        );
        console.log('Response.data.body Profile:', response.data.body);

        return response.data.body;
    } catch (error) {
        // Gestion des erreurs
        if (error.response) {
            // Erreur de réponse HTTP (statut non-200)
            console.error('Erreur de réponse HTTP:', error.response.status);
        } else if (error.request) {
            // Erreur de requête (pas de réponse reçue)
            console.error('Erreur de requête:', error.request);
        } else {
            // Erreur pendant la requête (autre erreur)
            console.error('Erreur pendant la requête:', error.message);
        }
        throw error;
    }
}

export async function updateUserProfile(firstName, lastName, token) {
    try {
        const response = await axios.put(
            `http://localhost:3001/api/v1/user/profile`,
            {
                firstName: firstName,
                lastName: lastName,
            },
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            }
        );
        return response.data.body;
    } catch (error) {
        // Gestion des erreurs
        if (error.response) {
            // Erreur de réponse HTTP (statut non-200)
            console.error('Erreur de réponse HTTP:', error.response.status);
        } else if (error.request) {
            // Erreur de requête (pas de réponse reçue)
            console.error('Erreur de requête:', error.request);
        } else {
            // Erreur pendant la requête (autre erreur)
            console.error('Erreur pendant la requête:', error.message);
        }
        throw error;
    }
}
