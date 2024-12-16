import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice.js';

// Création du store avec le reducer userReducer
const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;

// Un store est un objet qui contient l'état de l'application et permet de le gérer

// Les reducers sont des fonctions qui déterminent comment l'état change en réponse aux actions
// ex: addTask: (state, action) => { ... }
// Grâce à Redux, on peut changer le state, car ce n'est pas le 'vrai state', mais une copie de celui-ci gérée sous le capot. Plus besoin de créer des copies de tableau ou d'objet pour éviter les effets de bord.

// Une action est un objet qui décrit un changement dans l'état de l'application, elle contient un type et éventuellement des données supplémentaires
// ex: { type: "ADD_TASK", payload: "Faire les courses" } --- type = nom du slice / nom de la fonction; ex: todo/addTask
// Une action comporte 2 informations :
// Quelle est la tâche à faire ? => Type
//Quels sont les données nécessaires pour effectuer cette tâche ? => Payload
