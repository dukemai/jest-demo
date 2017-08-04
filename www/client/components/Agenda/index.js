import React from 'react';
import { Link } from 'react-router-dom';

import { Hero, Title, SubTitle, NavBar, Footer } from '../share';

const propTypes = {

}

const defaultProps = {

}

const Agenda = () => (
    <div className="agenda">
        <Hero>
            <div className="columns is-vcentered">
                <div className="column">
                    <Title>
                         Agenda
                    </Title>
                    <SubTitle>
                         The main topic is testing with <a>#Jest</a>
                         <br />
                         Walk through a setup for NodeJS project and look at how Jest helps a project.
                         <br />
                         Today bullet points
                         <Link className="is-pulled-right button is-primary is-inverted is-outlined" to={'/TechnicalStacks'}>
                            Technical Stacks
                        </Link>
                    </SubTitle>
                </div>    
            </div>    
        </Hero>
        <div className="container content">
            <ul>
                <li>
                    <Link to="/TechnicalStacks">
                        Technical Stacks(typical setup)
                    </Link>    
                    <ul>
                        <li>
                            <Link to="/TechnicalStacks/Express">
                                Express, MongoDB, Mongoose
                            </Link>
                        </li>
                        <li>
                            <Link to="/TechnicalStacks">
                                Eslint, AirBnB Rules, Webpack, Gulp
                            </Link>
                        </li>
                        <li>
                            <Link to="/TechnicalStacks/Docker">
                                Docker, Swagger
                            </Link>
                        </li>
                        <li>
                            <Link to="/TechnicalStacks/React">
                                ES6, React, Redux, Redux Thunk, Axios
                            </Link>
                        </li>
                    </ul>    
                </li>
                <li>
                    <Link to="/Jest">
                        Testing with Jest
                    </Link>
                    <ul>
                        <li>
                            <Link to="/Jest">
                                Short Intro
                             </Link>   
                        </li>
                        <li>
                            <Link to="/Jest">
                                Setup and simple testing
                            </Link>   
                        </li>
                    </ul>
                </li>
                <li>
                    Jest in action
                    <ul>
                        <li>
                            <Link to="/Jest/testing-against-database">
                                Testing against databases
                            </Link>    
                        </li>
                        <li>
                            <Link to="/Jest/testing-api">
                                Testing APIs
                            </Link>
                        </li>                        
                        <li>
                            <Link to="/Jest/testing-react">
                                Testing React
                            </Link>
                        </li>
                    </ul>
                </li>
                 <li>
                    <Link to="/the-end">
                        The End
                    </Link>
                </li>   
            </ul>        
        </div>
        <Footer 
            nextNode={{
                text: 'Technical Stacks',
                url: '/TechnicalStacks'
            }}
            previousNode={{
                text: 'First Page',
                url: '/'
            }} 
        />      
    </div>    
)

Agenda.propTypes = propTypes;
Agenda.defaultProps = defaultProps;

export default Agenda;