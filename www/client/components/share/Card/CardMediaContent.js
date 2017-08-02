import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    thumbnail: PropTypes.node,
    authorCredit: PropTypes.node,
}

const defaultProps = {
    thumbnail: null,
    authorCredit: null
}

const CardMediaContent = ({ thumbnail, authorCredit }) => (
    <div className="media">
        <div className="media-left">
            {(thumbnail)}
        </div>
        <div className="media-content">
            {(authorCredit)}
        </div>
    </div>
)

CardMediaContent.propTypes = propTypes;
CardMediaContent.defaultProps = defaultProps;

export default CardMediaContent;