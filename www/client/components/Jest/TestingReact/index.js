import React from 'react';

import { Link } from 'react-router-dom';
import { Hero, Title, SubTitle, NavBar, Card, CardContent, Section, Footer } from '../../share';
import Enzyme from './Enzyme';
import ReduxTesting from './ReduxTesting';
import Tips from './Tips';

const propTypes = {

}

const defaultProps = {

}

const TestingReact = () => (
    <div className="first-page">
        <Hero>
            <div className="columns is-vcentered">
                <div className="column">
                    <Title>
                        Testing React
                    </Title>
                    <SubTitle>
                       Jest is designed to test any React Project.
                       <Link className="is-pulled-right button is-primary is-inverted is-outlined" to={'/the-end'}>
                            The End
                        </Link>
                    </SubTitle>        
                </div>    
            </div>    
        </Hero>
        <Section>
            <Enzyme />
            <ReduxTesting />
            <Tips />
        </Section>
        <Footer
            nextNode={{
                text: 'The End!!!',
                url: '/the-end'
            }}
            previousNode={{
                text: 'Testing API',
                url: '/jest/testing-api'
            }}
        /> 
    </div> 
)

TestingReact.propTypes = propTypes;
TestingReact.defaultProps = defaultProps;

export default TestingReact;