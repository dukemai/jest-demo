import React from 'react';
import PropTypes from 'prop-types';

import {
  Link
} from 'react-router-dom';


const propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
}

const defaultProps = {
    text: '',
    link: '',
}

const NavBarItem = ({ text, link }) => (
    <Link to={link} className="navbar-item">
        {text}
    </Link>           
)

NavBarItem.propTypes = propTypes;
NavBarItem.defaultProps = defaultProps;

export default NavBarItem;