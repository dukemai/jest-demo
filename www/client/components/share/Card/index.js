import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node
}

const defaultProps = {
    children: null,
}

const Card = ({children}) => (
    <div className="card">
        {(children)}
    </div>       
)

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;

export { default as CardImage } from './CardImage';
export { default as CardContent } from './CardContent';
export { default as CardMediaContent } from './CardMediaContent';