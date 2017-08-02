import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const propTypes = {
    boxImage: PropTypes.string,
    content: PropTypes.node,
    className: PropTypes.string
}

const defaultProps = {
    boxImage: '',
    content: null,
    className: ''
}

const BoxImage = (boxImage) => {
    if (boxImage) {
        return (
            <div className="media-left">
                <figure className="image is-64x64">
                    <img src={boxImage} alt="Image" />
                </figure>
            </div>
        )
    }
}

const Box = ({ boxImage, content, className }) => (
    <div className={`box ${className}`}>
        <article className="media">
            {BoxImage(boxImage)}
            <div className="media-content">
                <div className="content">
                    {(content)}    
                </div>
            </div>
        </article>
    </div>
)

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;