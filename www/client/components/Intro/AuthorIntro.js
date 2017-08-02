import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node
}

const defaultProps = {
    children: null,
}

const AuthorIntro = () => (
    <div>
        <ul>
            <li>
                Department: <strong>Bonnier Program</strong>
            </li>
            <li>
                Team: <strong>Core CMS</strong>
            </li>
            <li>
                Position: <strong>Bridge Engineer</strong>
            </li>
            <li>
                A full stack developer(5 years experience).
            </li>
            <li>
                Competent skills: .Net, <a>#Episerver</a>, Javascript, CSS.
            </li>
            <li>
                Transition to: <a>#NodeJS</a>, <a>#React</a>.
            </li>    
        </ul>    
        <a>#javascriptlover</a> <a>#BNP</a>
    </div>    
)

AuthorIntro.propTypes = propTypes;
AuthorIntro.defaultProps = defaultProps;

export default AuthorIntro;