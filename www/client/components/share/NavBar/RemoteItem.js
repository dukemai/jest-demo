import React from 'react';
import PropTypes from 'prop-types';

import {
  Link
} from 'react-router-dom';


const propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
    itemClicked: PropTypes.func,
}

const defaultProps = {
    text: '',
    link: '',
    itemClicked: () => {}
}

const RemoteItem = ({ text, link, itemClicked }) => (
    <a className="navbar-item" onClick={() => itemClicked(link)}>{text}</a>          
)

RemoteItem.propTypes = propTypes;
RemoteItem.defaultProps = defaultProps;

export default RemoteItem;