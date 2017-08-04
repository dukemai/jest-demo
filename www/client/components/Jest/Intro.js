import React from 'react';

import { Link } from 'react-router-dom';
import { Hero, Title, SubTitle, NavBar, Card, CardContent, Section, Footer } from '../share';
import EasySetup from './EasySetup';
import ZeroConfiguration from './ZeroConfiguration';
import PowerfulMockup from './PowerfulMockup';
import TestingBenefit from './TestingBenefit';
import './style.scss';

const propTypes = {

}

const defaultProps = {

}

const JestIntro = () => (
    <div className="first-page">
        <Hero>
            <div className="columns is-vcentered">
                <div className="column">
                    <Title>
                        Introduction to Jest
                    </Title>
                    <SubTitle>
                       a testing framework by <strong>Facebook</strong> designed for any React project.
                       <Link className="is-pulled-right button is-primary is-inverted is-outlined" to={'/jest/setup'}>
                            Setup-Simple Demo
                        </Link>
                    </SubTitle>        
                </div>    
            </div>    
        </Hero>
        <Section>
            <div className="columns">
                <div className="column is-half">
                    <TestingBenefit />
                </div>
                <div className="column is-half">
                    <EasySetup />
                    <ZeroConfiguration />
                    <PowerfulMockup />
                </div>
            </div>
        </Section>
        <Footer
            nextNode={{
                text: 'Setup and demo',
                url: '/jest/setup'
            }}
            previousNode={{
                text: 'Technical Stacks',
                url: '/TechnicalStacks'
            }}
        /> 
    </div> 
)

JestIntro.propTypes = propTypes;
JestIntro.defaultProps = defaultProps;

export default JestIntro;