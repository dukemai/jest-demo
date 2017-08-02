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
            <strong>Express</strong> <small>@version 4</small>    
        </p>
        <pre>
            express --view=ejs www
        </pre>
    </div>            
)

const Express = () => (
    <Box 
        boxImage="/images/express.svg"
        content={content}
        className="express-box"
    />            
)

Express.propTypes = propTypes;
Express.defaultProps = defaultProps;

export default Express;