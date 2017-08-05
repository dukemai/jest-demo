import React from 'react';

import { Box, Anchor } from '../../share';

const propTypes = {

}

const defaultProps = {

}

const loadConfig = `dotenv.config({ path: \`.\${process.env.NODE_ENV}.env\` }); 
dotenv.load();`;

const content = (
    <div className="columns">
        <div className="column is-half">
            <Anchor name="Solution2" />
            #Solution 2:
            Setup a separate database for testing
            <pre>
                set NODE_ENV=test
            </pre>
            Setup
            <pre>
                {loadConfig}
            </pre>
        </div>
        <div className="column is-half content">
            Benefit
            <ul>
                <li>
                    Test real transactions with database
                </li>
                <li>
                    Can reuse test data for development
                </li>
                <li>
                    Can disconnect from MongoDB server so jest can exit properly
                </li>   
            </ul>
            Disadvantages
            <ul>
                <li>
                    Need a mongodb installation
                </li>
                <li>
                    Need to clear data everytime running tests
                </li>
            </ul>    
        </div>
    </div>
);

const Solution2 = () => (
    <Box content={content} />
)

Solution2.propTypes = propTypes;
Solution2.defaultProps = defaultProps;

export default Solution2;