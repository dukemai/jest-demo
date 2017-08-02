import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    text: PropTypes.string
}

const defaultProps = {
    text: '',
}

const SubSectionTitle = ({ text }) => (
    <h2 className="subtitle">{text}</h2>              
)

SubSectionTitle.propTypes = propTypes;
SubSectionTitle.defaultProps = defaultProps;

export default SubSectionTitle;