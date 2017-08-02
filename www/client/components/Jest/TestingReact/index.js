import React from 'react';

import { Link } from 'react-router-dom';
import { Hero, Title, SubTitle, NavBar, Card, CardContent, Section } from '../../share';


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
                        Setup Jest
                    </Title>
                    <SubTitle>
                       Jest is so easy to setup. By default, jest will look for *.test.* files.
                       <Link className="is-pulled-right button is-primary is-inverted is-outlined" to={'/the-end'}>
                            The End
                        </Link>
                    </SubTitle>        
                </div>    
            </div>    
        </Hero>
        <Section>
            <div className="columns">
                <div className="column is-half">
                </div>
                <div className="column is-half">
                </div>
            </div>
        </Section>   
    </div> 
)

TestingReact.propTypes = propTypes;
TestingReact.defaultProps = defaultProps;

export default TestingReact;