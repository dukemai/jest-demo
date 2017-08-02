import React from 'react';

import { Link } from 'react-router-dom';
import { Hero, Title, SubTitle, NavBar, Card, CardContent } from '../share';

const propTypes = {

}

const defaultProps = {

}

const ZeroConfiguration = () => (
    <Card>
        <CardContent>
            <Title>
                Zero configuration testing platform
            </Title>
            <SubTitle>
                Place tests in a __tests__ folder, or name your test files with a .spec.js or .test.js extension. 
            </SubTitle>       
        </CardContent>    
    </Card>
)

ZeroConfiguration.propTypes = propTypes;
ZeroConfiguration.defaultProps = defaultProps;

export default ZeroConfiguration;