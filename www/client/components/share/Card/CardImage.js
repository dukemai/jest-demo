import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node
}

const defaultProps = {
    children: null,
}

const CardImage = () => (
    <div className="card-image">
        <figure className="image is-4by3">
            <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image" />
        </figure>
    </div>
)

CardImage.propTypes = propTypes;
CardImage.defaultProps = defaultProps;

export default CardImage;