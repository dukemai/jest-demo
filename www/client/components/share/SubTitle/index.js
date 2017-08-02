import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node
}

const defaultProps = {
    children: null,
}

const SubTitle = ({ children }) => (
    <p className="subtitle">
       {(children)}
    </p>                
)

SubTitle.propTypes = propTypes;
SubTitle.defaultProps = defaultProps;

export default SubTitle;