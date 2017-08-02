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
            <strong>Docker</strong> <small>@version 4</small>    
        </p>
        <p>
            Dockerfile
        </p>    
        <pre>
            FROM mhart/alpine-node:latest
            <br />
            ADD package.json /tmp/package.json
            <br />
            RUN cd /tmp && npm install
            <br />
            RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/
            <br />
            WORKDIR /opt/app
            <br />
            ADD . /opt/app
            <br />
            EXPOSE 3000
            <br />
            CMD ["npm", "run", "start-dev"]
        </pre>
        <p>
            docker-compose.yml
        </p>    
        <pre>
            version: "2"
            <br />
            services:
            <br />
            web:
            <br />
                build: .
                <br />
                ports:
                <br />
                - "3000:3000"
                <br />
                links:
                <br />
                - mongo
                <br />
            mongo:
            <br />
                image: mongo
                <br />
                ports:
                <br />
                - "27017:27017"
            <br />
            swager:    
                <br />
                image: swaggerapi/swagger-ui
                <br />
                ports:
                <br />
                - "3001:8080"
                <br />
                environment:
                <br />
                - API_URL=http://localhost:3000/swagger.json
        </pre>
    </div>
);
const Docker = () => (
    <Box 
        boxImage="/images/docker.svg"
        content={content}
        className="docker-box"
    />         
)

Docker.propTypes = propTypes;
Docker.defaultProps = defaultProps;

export default Docker;