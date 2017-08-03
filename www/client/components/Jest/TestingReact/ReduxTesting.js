import React from 'react';

import { Box } from '../../share';

const propTypes = {

}

const defaultProps = {

}

const script =`import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

// You would import the action from your codebase in a real scenario
const addTodo = () => ({ type: 'ADD_TODO' })

it('should dispatch action', () => {

  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(addTodo())

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: 'ADD_TODO' }
  expect(actions).toEqual([expectedPayload])
})
`;

const content = (
    <div className="columns">
        <div className="column is-half">
            <strong>Redux Testing - redux-mock-store</strong>
            <br />
            Install
            <pre>
                npm install redux-mock-store --save-dev
            </pre>
            Usage
            <pre>
                {script}
            </pre>
            
        </div>
        <div className="column is-half content">
            <strong>redux-mock-store</strong> is a good for testing Redux separately.
            <ul>
                <li>
                    Recommended by Redux
                </li>
                <li>
                    Able to test async actions
                </li>
                <li>
                    Able to test with middlewares
                </li>
            </ul>
        </div>
    </div>
);

const ReduxTesting = () => (
    <Box content={content} />
)

ReduxTesting.propTypes = propTypes;
ReduxTesting.defaultProps = defaultProps;

export default ReduxTesting;