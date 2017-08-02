import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node
}

const defaultProps = {
    children: null,
}

const Hero = ({ children }) => (
    <section className="hero is-primary">
        <div className="hero-body">
            <div className="container">
                {(children)}
            </div>
        </div>
    </section>               
)

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;