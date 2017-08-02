import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Hero, Title, SubTitle, NavBar, Section,
        SubSectionTitle } from '../share';
import socket from '../../io';

const propTypes = {
    children: PropTypes.node,
    history: PropTypes.shape({
        push: PropTypes.func
    })
}

const defaultProps = {
    children: null,
    history: {}
}

const goTo = (action, history) => {
    socket.emit('send-command', { action });
    history.push(`/admin/${action}`)
}

const Remote = ({ children, history }) => (
    <ul className="navbar-menu">
        <li className="navbar-item">
            <a onClick={() => goTo('', history)}>First Page</a>
        </li>
        <li className="navbar-item">
            <a onClick={() => goTo('Intro', history)}>Intro</a>
        </li>
        <li className="navbar-item">
            <a onClick={() => goTo('Agenda', history)}>Agenda</a>
        </li>
        <li className="navbar-item">
            <a onClick={() => goTo('TechnicalStacks', history)}>Technical Stacks</a>    
        </li>
        <li className="navbar-item">
            <a onClick={() => goTo('TechnicalStacks/Express', history)}>Express</a>
        </li>
        <li className="navbar-item">
            <a onClick={() => goTo('TechnicalStacks/MongoDB', history)}>MongoDB</a>
        </li>
        <li className="navbar-item">
            <a onClick={() => goTo('TechnicalStacks/Docker', history)}>Docker</a>
        </li>    
        <li className="navbar-item">
            <a onClick={() => goTo('TechnicalStacks/Webpack', history)}>Webpack</a>
        </li>    
        <li className="navbar-item">
            <a onClick={() => goTo('Jest', history)}>Jest Introduction</a>
        </li>
    </ul>
)

Remote.propTypes = propTypes;
Remote.defaultProps = defaultProps;

export default withRouter(Remote);