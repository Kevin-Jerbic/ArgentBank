import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { login, profile, updateUserProfile } from '../API/index.js';

// Thunk asynchrone pour la connexion de user
export const loginUser = createAsyncThunk(
    'user/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            // Appel à la fonction de connexion de l'API
            const data = await login(email, password);
            // Récupération réponse token
            const token = data.token;
            // Appel à la fonction de profil de l'API
            const user = await profile(token);
            // Création d'un objet contenant à la fois le token et les données de user
            const dataUserAndToken = { token: token, ...user };

            // Retourne les données de user et son token
            return dataUserAndToken;
        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message);
        }
    }
);

// Thunk asynchrone pour récupérer le profil de user
export const profileUser = createAsyncThunk(
    'user/profile',
    async (token, { rejectWithValue }) => {
        try {
            // Appel à la fonction de profil de l'API
            const user = await profile(token);
            // Création d'un objet contenant à la fois le token et les données de user
            const dataUserAndToken = { token: token, ...user };

            // Retourne les données de user et son token
            return dataUserAndToken;
        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message);
        }
    }
);

// Thunk asynchrone pour mettre à jour le profil de user
export const profileUpdate = createAsyncThunk(
    'user/profileUpdate',
    async ({ firstName, lastName, token }, { rejectWithValue }) => {
        try {
            // Appel à la fonction de mise à jour de profil de l'API
            const user = await updateUserProfile(firstName, lastName, token);
            // Création d'un objet contenant à la fois le token et les données de user
            const dataUserAndToken = { token: token, ...user };

            // Retourne les données de user et son token
            return dataUserAndToken;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Slice du reducer pour gérer les actions liées à l'utilisateur
const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: true,
        email: null,
        firstName: null,
        lastName: null,
        token: null,
        error: null,
    },
    reducers: {
        // Action pour réinitialiser toutes les données utilisateur lors de la déconnexion
        clearUserData: state => {
            state.email = null;
            state.firstName = null;
            state.lastName = null;
            state.token = null;
        },
    },
    extraReducers: builder => {
        // Gestion des actions asynchrones de la connexion de l'utilisateur
        builder
            .addMatcher(
                // Lorsque l'une des actions est en cours d'exécution
                isAnyOf(
                    loginUser.pending,
                    profileUser.pending,
                    profileUpdate.pending
                ),
                state => {
                    // Définition de l'état de chargement pendant la requête
                    state.loading = true;
                    // Réinitialisation de l'erreur à null
                    state.error = null;
                }
            )
            .addMatcher(
                // Lorsque l'une des actions est terminée avec succès
                isAnyOf(
                    loginUser.fulfilled,
                    profileUser.fulfilled,
                    profileUpdate.fulfilled
                ),
                (state, action) => {
                    // Mise à jour des données utilisateur dans le store
                    state.loading = false;
                    state.email = action.payload.email;
                    state.firstName = action.payload.firstName;
                    state.lastName = action.payload.lastName;
                    state.token = action.payload.token;
                    state.error = null;
                }
            )
            .addMatcher(
                isAnyOf(
                    // En cas d'échec de la requête
                    loginUser.rejected,
                    profileUser.rejected,
                    profileUpdate.rejected
                ),
                (state, action) => {
                    state.loading = false;
                    // Stockage du message d'erreur dans l'état
                    state.error = action.error.message;
                }
            );
    },
});

// Export des actions du slice utilisateur
export const { clearUserData } = userSlice.actions;

// Export du reducer du slice utilisateur
export default userSlice.reducer;
