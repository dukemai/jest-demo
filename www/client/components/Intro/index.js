import React from 'react';
import { Link } from 'react-router-dom';

import { Hero, Title, SubTitle, NavBar, Card, Section,
        SubSectionTitle, CardImage, CardContent, CardMediaContent } from '../share';
import Avatar from './Avatar';
import AuthorCredit from './AuthorCredit';
import AuthorIntro from './AuthorIntro';


import './style.scss';

const propTypes = {

}

const defaultProps = {

}
const thumbnail = <Avatar />;
const authorCredit = <AuthorCredit />;
const Intro = () => (
    <div className="intro">
        <Section>
            <SubSectionTitle text="#BNP #React #NodeJS #Episerver" />  
            <div className="columns">
                <div className="column is-one-third">
                    <Card>
                        <CardContent>
                            <CardMediaContent thumbnail={thumbnail} authorCredit={authorCredit} />
                            <div className="content">
                                <AuthorIntro />
                            </div>    
                        </CardContent>    
                    </Card>    
                </div>      
                <div className="column content">
                    <strong>Short Intro</strong>
                    <p>
                        <span className="tag is-info">
                            Purpose
                        </span>
                        <br />
                        I started a project two months ago. The project is to report statuses of connections between 
                        nodes(<strong>Epi CMS</strong>, <strong>Klara CMS</strong>, <strong>Nav</strong>, <strong>FrontEnd Sites DN.se, Di.se</strong>) in the ecosystem.
                    </p>
                    <p>
                        <span className="tag is-info">
                            History
                        </span>
                        <br />
                        The project was built upon <a className="is-primary"> #.Net and #React </a> and later was changed to <a>#NodeJS, #Express, #React </a>. The project was then using Jest for 
                        testing features.
                    </p>
                    <p>
                        <span className="tag is-primary">
                            Testing with #Jest
                        </span>
                        <br />
                        Tests were created for ensure the businesses and reducing the time for repetitions.
                    </p>       
                </div>
            </div>  
        </Section>
    </div> 
)

Intro.propTypes = propTypes;
Intro.defaultProps = defaultProps;

export default Intro;