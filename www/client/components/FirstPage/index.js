import React from 'react';

import { Link } from 'react-router-dom';
import { Hero, Title, SubTitle, NavBar } from '../share';
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
                        <Link className="is-pulled-right button is-primary is-inverted is-outlined" to={'/Intro'}>
                            Intro
                        </Link>
                    </SubTitle>        
                </div>    
            </div>    
        </Hero>    
    </div> 
)

FirstPage.propTypes = propTypes;
FirstPage.defaultProps = defaultProps;

export default FirstPage;