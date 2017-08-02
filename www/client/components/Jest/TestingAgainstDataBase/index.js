import React from 'react';

import { Link } from 'react-router-dom';
import { Hero, Title, SubTitle, NavBar, Card, CardContent, Section } from '../../share';

import Solution1 from './Solution1';
import Solution2 from './Solution2';

const propTypes = {

}

const defaultProps = {

}

const TestingAgainstDatabase = () => (
    <div className="first-page">
        <Hero>
            <div className="columns is-vcentered">
                <div className="column">
                    <Title>
                        Testing Against Database
                    </Title>
                    <SubTitle>
                       Some tips for testing logic interacting with Database.
                       <Link className="is-pulled-right button is-primary is-inverted is-outlined" to={'/jest/testing-api'}>
                            Testing APIs
                        </Link>
                       <br />
                       <a>#MongoDB</a> and <a>#Mongoose</a> are used for demontrastrion
                    </SubTitle>        
                </div>    
            </div>    
        </Hero>
        <Section>
            <Solution1 />
            <Solution2 />
        </Section>   
    </div> 
)

TestingAgainstDatabase.propTypes = propTypes;
TestingAgainstDatabase.defaultProps = defaultProps;

export default TestingAgainstDatabase;