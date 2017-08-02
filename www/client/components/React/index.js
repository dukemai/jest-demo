import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../share';

import './style.scss';

const propTypes = {
}

const defaultProps = {
}

const mongooseCode = `const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HashRouter>
        <div>
          <LoadingBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/list/:product" component={List} />
          <Route exact path="/search/:searchText?" component={Search} />
          <Route exact path="/log/:id" component={Detail} />
        </div>
      </HashRouter>
    </ConnectedRouter>
  </Provider>
);`;
const content = (
    <div>
        <p>
            <strong>React</strong> <small>@version 15.6</small>
            <br />
            <strong>Redux</strong> <small>@version 4.4.x</small> to manipulate states.
            <br />
            <strong>React Router</strong> <small>@version 4.x</small> to handle routing.
        </p>
        <pre>
            {mongooseCode}
        </pre>
    </div>            
)

const ReactContent = () => (
    <Box 
        boxImage="/images/react.svg"
        content={content}
        className="react-box"
    />            
)

ReactContent.propTypes = propTypes;
ReactContent.defaultProps = defaultProps;

export default ReactContent;