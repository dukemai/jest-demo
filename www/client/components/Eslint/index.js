import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../share';

import './style.scss';

const propTypes = {
}

const defaultProps = {
}

const content = (
    <div>
        <p>
            <strong>Eslint</strong> <small>@version 4</small>
            <br />
            Coupled with <strong>AirBnB rules</strong>
        </p>
        <pre>
            "eslint": "^3.19.0",
            <br />
            "eslint-config-airbnb": "^15.0.1",
            <br />
            "eslint-find-rules": "^1.14.3",
            <br />
            "eslint-plugin-babel": "^4.1.1",
            <br />
            "eslint-plugin-import": "^2.2.0",
            <br />
            "eslint-plugin-jsx-a11y": "^5.0.3",
            <br />
            "eslint-plugin-react": "^7.0.1",
        </pre>
    </div>            
)

const Eslint = () => (
    <Box 
        boxImage="/images/airbnb.svg"
        content={content}
        className="eslint-box"
    />            
)

Eslint.propTypes = propTypes;
Eslint.defaultProps = defaultProps;

export default Eslint;