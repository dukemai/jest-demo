import React from 'react';

import { Box } from '../../share';

const propTypes = {

}

const defaultProps = {

}

const script =`import { shallow, mount, render } from 'enzyme';
appInstance = mount(
      <App />,
)

//events
const homeColumn = appInstance.find('HomeColumn').first();       
homeColumn.find('Link').simulate('click', { button: 0 });   

//verify
expect(appInstance.find('HomeColumn').length).toEqual(3);
`;

const content = (
    <div className="columns">
        <div className="column is-half">
            <strong>Enzyme</strong>
            <br/>
            Install
            <pre>
                npm install enzyme --save-dev
            </pre>
            Setup
            <pre>
                {script}
            </pre>
            
        </div>
        <div className="column is-half content">
            <strong>Enzyme</strong> is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.
            <ul>
                <li>
                    able to render react components
                </li>
                <li>
                    able to mount react components
                </li>
                <li>
                    able to find react components
                </li>
                <li>
                    able to simulate events
                </li>  
            </ul>
        </div>
    </div>
);

const Enzyme = () => (
    <Box content={content} />
)

Enzyme.propTypes = propTypes;
Enzyme.defaultProps = defaultProps;

export default Enzyme;