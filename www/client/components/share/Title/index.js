import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node
}

const defaultProps = {
    children: null,
}

const Title = ({ children }) => (
    <p className="title">
       {(children)}
    </p>                
)

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;