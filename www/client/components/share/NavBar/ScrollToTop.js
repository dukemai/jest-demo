import React from 'react';
import PropTypes from 'prop-types';
import scrollTo from 'scroll-to';

import remoteSend from './utilities';


const propTypes = {
    children: PropTypes.node
}

const defaultProps = {
    children: null,
}

const scrollTopClicked = () => {
    remoteSend('scroll-top');
    scrollTo(0, 0);
}

const ScrollToTop = ({ children }) => (
    <div className="navbar-item" onClick={scrollTopClicked}>
        <a className="navbar-item">
         Scroll Top
        </a>
    </div>                   
)

ScrollToTop.propTypes = propTypes;
ScrollToTop.defaultProps = defaultProps;

export default ScrollToTop;