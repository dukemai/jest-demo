import React from 'react';

import { Link } from 'react-router-dom';
import { Hero, Title, SubTitle, NavBar, Card, CardContent, Anchor } from '../share';

const propTypes = {

}

const defaultProps = {

}

const EasySetup = () => (
    <Card>
        <Anchor name="EasySetup" />
        <CardContent>
            <Title>
                Easy Setup
            </Title>
            <p className="content">
                Complete and easy to set-up JavaScript testing solution. Works out of the box for any React project.
            </p>       
        </CardContent>    
    </Card>
)

EasySetup.propTypes = propTypes;
EasySetup.defaultProps = defaultProps;

export default EasySetup;