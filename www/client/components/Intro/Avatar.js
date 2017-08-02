import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node
}

const defaultProps = {
    children: null,
}

const Avatar = () => (
    <figure className="image is-48x48">
        <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image" />
    </figure>
)

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;