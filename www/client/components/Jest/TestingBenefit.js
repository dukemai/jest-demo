import React from 'react';

import { Link } from 'react-router-dom';
import { Hero, Title, SubTitle, NavBar, Card, CardContent } from '../share';

const propTypes = {

}

const defaultProps = {

}

const TestingBenefit = () => (
    <Card>
        <CardContent>
            <Title>
                Benefits of having tests
            </Title>
            <SubTitle>
                it is no doubt that having tests brings a lot of benefits.
            </SubTitle>
            <p className="content">
                <ul>
                    <li>
                        Ensure the chains of the app logic when making changes.
                    </li>
                    <li>
                        Avoid boring and repeatition steps when verifying.
                    </li>
                    <li>
                        Automate generating data for testing.
                    </li>
                    <li>
                        Code logic is securer when delivering.
                    </li>    
                </ul>    
            </p>    
        </CardContent>    
    </Card>
)

TestingBenefit.propTypes = propTypes;
TestingBenefit.defaultProps = defaultProps;

export default TestingBenefit;