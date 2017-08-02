import React from 'react';

import { Link } from 'react-router-dom';
import { Hero, Title, SubTitle, NavBar, Card, CardContent } from '../share';

const propTypes = {

}

const defaultProps = {

}

const PowerfulMockup = () => (
    <Card>
        <CardContent>
            <Title>
                Powerful mocking library
            </Title>
            <p className="content">
                Powerful mocking library for functions and modules.
            </p>       
        </CardContent>    
    </Card>
)

PowerfulMockup.propTypes = propTypes;
PowerfulMockup.defaultProps = defaultProps;

export default PowerfulMockup;