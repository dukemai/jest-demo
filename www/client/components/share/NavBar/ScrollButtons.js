import React from 'react';
import PropTypes from 'prop-types';

import remoteSend from './utilities';
import ScrollToTop from './ScrollToTop';
import { scrollUp, scrollDown } from '../../../utilities';
import './ScrollButtons.scss';

const propTypes = {
    children: PropTypes.node
}

const defaultProps = {
    children: null,
}

const scrollUpClicked = () => {
    remoteSend('scroll-up');
    scrollUp();
}
const scrollDownClicked = () => {
    remoteSend('scroll-down');
    scrollDown();
}

const ScrollButtons = ({ children }) => (
    <div className="side-bar">
        <ScrollToTop />
        <div className="navbar-item" onClick={scrollUpClicked}>
            <a className="navbar-item">
                Scroll Up
            </a>
        </div>
        <div className="navbar-item" onClick={scrollDownClicked}>
            <a className="navbar-item">
                Scroll Down
            </a>
        </div>
    </div>                   
)

ScrollButtons.propTypes = propTypes;
ScrollButtons.defaultProps = defaultProps;

export default ScrollButtons;