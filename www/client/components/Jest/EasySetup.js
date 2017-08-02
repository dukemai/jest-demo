import React from 'react';

import { Link } from 'react-router-dom';
import { Hero, Title, SubTitle, NavBar, Card, CardContent } from '../share';

const propTypes = {

}

const defaultProps = {

}

const EasySetup = () => (
    <Card>
        <CardContent>
            <Title>
                Easy Setup
            </Title>
            <SubTitle>
                Complete and easy to set-up JavaScript testing solution. Works out of the box for any React project.
            </SubTitle>       
        </CardContent>    
    </Card>
)

EasySetup.propTypes = propTypes;
EasySetup.defaultProps = defaultProps;

export default EasySetup;