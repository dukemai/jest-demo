import React from 'react';

import { Box, Anchor } from '../../share';

const propTypes = {

}

const defaultProps = {

}

const content = (
    <div className="installation">
        <Anchor name="Installation" />
        <p>
            <strong>jest</strong> <small>@version ^20.0.4</small>
            <br />
            <strong>babel-jest</strong> <small>^20.0.3</small>
        </p>
        Package.json
        <pre>
            "test": "jest --runInBand && set NODE_ENV=test",
        </pre>
        jest.config.js
        <pre>
            {
                `module.exports = {
                    verbose: true,
                    testPathIgnorePatterns:
                    ['/node_modules/', '/client/'],
                };`
            }
        </pre>
    </div>
);

const Installation = () => (
    <Box content={content} />
)

Installation.propTypes = propTypes;
Installation.defaultProps = defaultProps;

export default Installation;