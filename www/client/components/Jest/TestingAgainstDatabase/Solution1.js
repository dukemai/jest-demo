import React from 'react';

import { Box } from '../../share';

const propTypes = {

}

const defaultProps = {

}

const content = (
    <div className="columns">
        <div className="column is-half">
            #Solution 1:
            Mockup mongoose by using Mockgoose
            <pre>
                npm install mockgoose --save-dev
            </pre>
            Setup
            <pre>
                {
                    `var mongoose = require('mongoose');
                var Mockgoose = require('mockgoose').Mockgoose;
                var mockgoose = new Mockgoose(mongoose);

                mockgoose.prepareStorage().then(function() {
                    // fake connection		
                });`   
                }
            </pre>
            
        </div>
        <div className="column is-half content">
                Benefit
            <ul>
                <li>
                    In memory data
                </li>
                <li>
                    Do not require a real Mongo installation
                </li> 
                <li>
                    Data is reset every run
                </li>    
            </ul>
            Disadvantages
            <ul>
                <li>
                    Cannot shutdown MongoDB server which keeps Jest cannot terminate processes
                </li>
                <li>
                    Upgrading mongodb or mongoose might break the mockup code
                </li>
            </ul>    
        </div>
    </div>
);

const Solution1 = () => (
    <Box content={content} />
)

Solution1.propTypes = propTypes;
Solution1.defaultProps = defaultProps;

export default Solution1;