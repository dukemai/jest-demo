import React from 'react';
import { Link } from 'react-router-dom';

import { Hero, Title, SubTitle, NavBar, Footer } from '../share';
import Intro from '../Intro';

import './style.scss';

const propTypes = {

}

const defaultProps = {

}

const FirstPage = () => (
    <div className="first-page">
        <Hero>
            <div className="columns is-vcentered">
                <div className="column">
                    <Title>
                        An alternative for development with Node
                    </Title>
                    <SubTitle>
                        A presentation by <span className="credit"> Duc Mai </span>
                    </SubTitle>
                </div>    
            </div>    
        </Hero>   
        <Intro />
        <Footer
            nextNode={{
                text: 'Agenda',
                url: '/Agenda'
            }} 
        />
    </div> 
)

FirstPage.propTypes = propTypes;
FirstPage.defaultProps = defaultProps;

export default FirstPage;