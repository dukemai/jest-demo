import React from 'react';

import { Box } from '../../share';

const propTypes = {

}

const defaultProps = {

}

const content = (
    <div className="installation">
        Few notes to share
        <ul>
            <li>
                Jest is sensitive with asynchronous code. Remember to return and handle properly your async code.
            </li> 
            <li>
                Export test functions and combine in an one final test to control the order of tests.
            </li> 
            <li>
                User before all/after all to do one time setup tasks.
            </li> 
            <li>
                Set environment to Test when running tests to setup some specific logic.
            </li> 
            <li>
                Remember to disconnect from mongodb when testing against mongodb
            </li>  
        </ul>    
    </div>
);

const Notes = () => (
    <Box content={content} />
)

Notes.propTypes = propTypes;
Notes.defaultProps = defaultProps;

export default Notes;