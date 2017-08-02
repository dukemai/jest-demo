import React from 'react';
import PropTypes from 'prop-types';
import { Hero, Title, SubTitle, NavBar, Footer } from '../share';

const propTypes = {
}

const defaultProps = {
}

const TheEnd = () => (
    <Hero>
        <div className="columns is-vcentered">
            <div className="column">
                <Title>
                        The End!!!
                </Title>
                <SubTitle>
                        Thank you for your listening.
                        <br />
                        You can reach me @ duc.mai@niteco.se
                        <br />
                        Follow me on medium https://medium.com/@mrducmv88
                </SubTitle>
            </div>    
        </div>    
    </Hero>
)

TheEnd.propTypes = propTypes;
TheEnd.defaultProps = defaultProps;

export default TheEnd;