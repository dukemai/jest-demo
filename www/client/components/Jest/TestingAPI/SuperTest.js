import React from 'react';

import { Box } from '../../share';

const propTypes = {

}

const defaultProps = {

}

const superTestScript =`import request from 'supertest';
import app from '../../../app';

request(app)
        .get('url')
        .query({
         ...
        })
        .expect(200)
        .then((res) => {
          expect(res.body.Data.length).toBeGreaterThan(0);         
        })`;

const content = (
    <div className="columns">
        <div className="column is-half">
            Install
            <pre>
                npm install supertest --save-dev
            </pre>
            Setup
            <pre>
                {superTestScript}
            </pre>
            
        </div>
        <div className="column is-half content">
            Benefit
            <ul>
                <li>
                    Be-able to test real requests as made by client
                </li>
                <li>
                    Do not need to have a separate server for testing
                </li>
                <li>
                    Can cooperate with react testing to feed data for it
                </li>  
            </ul>
            Notes
            <ul>
                <li>
                    Remember to return in every async code made by SuperTest so Jest will run correctly
                </li>
                <li>
                    Need exporting Express App
                </li>
            </ul>    
        </div>
    </div>
);

const SuperTest = () => (
    <Box content={content} />
)

SuperTest.propTypes = propTypes;
SuperTest.defaultProps = defaultProps;

export default SuperTest;