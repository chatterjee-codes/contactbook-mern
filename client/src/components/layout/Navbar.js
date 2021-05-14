import React, { Fragment, useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
import ContactContext from '../../context/contact/ContactContext';

const Navbar = ({ title, icon }) => {
    const authContext = useContext(AuthContext);
    const contactContext = useContext(ContactContext);

    const { isAuthenticated, logout, user } = authContext;
    const { clearContacts } = contactContext;

    useEffect(() =>{
        authContext.loadUser();
        //eslint-disable-next-line
    }, []);

    const onLogout = (e) => {
        logout();
        clearContacts();
    }

    const authLinks = (
        <Fragment>
            <li>Welcome! {user && user.name}</li>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className="fa fa-sign-out"></i> {' '}
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    );

    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>

            <ul>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: 'Contact Book',
    icon: 'fa fa-address-book'
}

export default Navbar

