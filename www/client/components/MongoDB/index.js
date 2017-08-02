import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../share';

import './style.scss';

const propTypes = {
}

const defaultProps = {
}

const mongooseCode = `export function connect() {
    mongoose.Promise = Promise;
    return mongoose.connect(process.env.MONGO_URI, 
        { useMongoClient: true }, (err, res) => {
    });
}
export function disconnect() {
    return mongoose.disconnect();
}`;
const content = (
    <div>
        <p>
            <strong>MongDB</strong> <small>@version 3.14</small>
            <br />
            <strong>Mongoose</strong> <small>@version 4.14</small> to facilitate communications with MongoDB
        </p>
        <pre>
            {mongooseCode}
        </pre>
    </div>            
)

const MongoDB = () => (
    <Box 
        boxImage="/images/mongodb.png"
        content={content}
        className="mongodb-box"
    />            
)

MongoDB.propTypes = propTypes;
MongoDB.defaultProps = defaultProps;

export default MongoDB;