import { PropTypes } from 'prop-types';
import argentBankLogo from '../src/assets/argentBankLogo.png';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Layout({ children }) {
    return (
        <>
            <Header image={argentBankLogo} />
            {children}
            <Footer />
        </>
    );
}
Layout.propTypes = {
    children: PropTypes.element.isRequired,
};
