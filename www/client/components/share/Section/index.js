import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node
}

const defaultProps = {
    children: null,
}

const Section = ({ children }) => (
    <section className="section">
        <div className="container">
            {(children)}
        </div>
    </section>            
)

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;

export { default as SubSectionTitle } from './SubSectionTitle';
export { default as SectionTitle } from './SectionTitle';