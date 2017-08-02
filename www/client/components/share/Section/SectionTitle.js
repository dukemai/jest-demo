import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    text: PropTypes.string
}

const defaultProps = {
    text: '',
}

const SectionTitle = ({ text }) => (
    <h1 className="title">{text}</h1>              
)

SectionTitle.propTypes = propTypes;
SectionTitle.defaultProps = defaultProps;

export default SectionTitle;