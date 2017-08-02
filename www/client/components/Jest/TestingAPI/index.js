import React from 'react';

import { Link } from 'react-router-dom';
import { Hero, Title, SubTitle, NavBar, Card, CardContent, Section } from '../../share';
import SuperTest from './SuperTest';

const propTypes = {

}

const defaultProps = {

}

const TestingAPI = () => (
    <div className="first-page">
        <Hero>
            <div className="columns is-vcentered">
                <div className="column">
                    <Title>
                        Testing API
                    </Title>
                    <SubTitle>
                       Supertest is a strong mocking library for testing requests.
                       <Link className="is-pulled-right button is-primary is-inverted is-outlined" to={'/jest/testing-react'}>
                            Testing React
                        </Link>
                    </SubTitle>        
                </div>    
            </div>    
        </Hero>
        <Section>
            <SuperTest />
        </Section>   
    </div> 
)

TestingAPI.propTypes = propTypes;
TestingAPI.defaultProps = defaultProps;

export default TestingAPI;