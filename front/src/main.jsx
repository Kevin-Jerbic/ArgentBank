import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ConnectedCheck from './components/ConnectedCheck.jsx';
import Layout from './layout.jsx';
import Index from './pages/Index.jsx';
import Login from './pages/Login.jsx';
import User from './pages/User.jsx';
// Redux
import { Provider } from 'react-redux';
import store from './Store/Index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Layout>
                    <Routes>
                        {/* Routes publiques */}
                        <Route path="/" element={<Index />} />
                        <Route path="/login" element={<Login />} />

                        {/* Route protégée */}
                        <Route element={<ConnectedCheck />}>
                            <Route path="/user" element={<User />} />
                        </Route>
                    </Routes>
                </Layout>
            </Router>
        </Provider>
    </React.StrictMode>
);

// Avec Redux, finit les props drilling, on peut accéder à n'importe quel state de l'application depuis n'importe quel composant.
// D'où notre utilisation de <Provider store={store}> pour donner accès à notre store à tous les composants de notre application.
/*
 */
/* 
Le but de Redux est de dire que nous avons de multiples composants qui sont imbriqués les uns dans les autres et qui partagent un état.
Une gestion de tâches à faire, un panier d'achat, un formulaire, etc...
Et donc pour que tous ces composants puissent y avoir accès, nous l'avons placé dans le composant Parent, qui lui même passe ces différentes actions à ses enfants.
Et donc Redux nous dit : créons un état en dehors de ces composants qui va contenir les données mais aussi les intéractions possibles avec ces tâches (add, delete, update ...) et on appelle ça un Store.
Maintenant que cet état est sorti de ces composants, nous pouvons y accéder depuis n'importe quel composant. 
*/
/*
 */
/*
Beaucoup de dév trouvaient Redux super mais c'était un enfer à mettre en place. C'est donc là qu'intervient Redux Toolkit.
Une couche, une abstraction, est créée en-dessus de Redux pour simplifier son utilisation. 
La partie verbeuse et chiante à mettre en place est globalement gérée par Redux Toolkit sous le capot.
Malgré tout : essayer Tanstack, beaucoup le recommandent. 
*/
