import React from 'react';

import { Link } from 'react-router-dom';
import { Hero, Title, SubTitle, NavBar, Card, CardContent, Section } from '../../share';
import Installation from './Installation';
import SimpleDemo from './SimpleDemo';
import Notes from './Notes';

import '../style.scss';

const propTypes = {

}

const defaultProps = {

}

const JestSetup = () => (
    <div className="first-page">
        <Hero>
            <div className="columns is-vcentered">
                <div className="column">
                    <Title>
                        Setup Jest
                    </Title>
                    <SubTitle>
                       Jest is so easy to setup. By default, jest will look for *.test.* files.
                       <Link className="is-pulled-right button is-primary is-inverted is-outlined" to={'/jest/testing-against-database'}>
                            Testing against database
                        </Link>
                    </SubTitle>        
                </div>    
            </div>    
        </Hero>
        <Section>
            <div className="columns">
                <div className="column is-half">
                    <Installation />
                </div>
                <div className="column is-half">
                    <Notes />
                </div>
            </div>
            <SimpleDemo />
        </Section>   
    </div> 
)

JestSetup.propTypes = propTypes;
JestSetup.defaultProps = defaultProps;

export default JestSetup;